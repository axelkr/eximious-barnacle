import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ObjectEvent, Topic } from 'choicest-barnacle';
import {
  RootAggregate, ObjectEventFactory, ObjectEventCommandProcessor,
  ProjectEventFactory, KanbanCardEventFactory, UUIDGenerator,
  KanbanCardCollection, ProjectCollection, ContextCollection, StateModelCollection
} from 'outstanding-barnacle';

import { ObjectStoreBackendService } from './backend/object-store-backend.service';

@Injectable({
  providedIn: 'root'
})
export class HeijunkaBoardService implements OnDestroy {
  readonly eventFactory = new ObjectEventFactory();
  readonly projectEventFactory = new ProjectEventFactory();
  readonly kanbanCardEventFactory = new KanbanCardEventFactory();

  private topic!: Topic;
  private topics: Topic[] = [];
  private commandProcessor!: ObjectEventCommandProcessor;
  private domainModel!: RootAggregate;
  private newObjectEvents!: Subscription;
  private newTopicEvents!: Subscription;

  constructor(private backend: ObjectStoreBackendService) {
    this.connectWithBackend();
    this.backend.queryAllTopics();
  }

  ngOnDestroy() {
    this.disconnectFromBackend();
  }

  public getKanbanCards(): KanbanCardCollection {
    return this.domainModel.kanbanCards;
  }

  public getProjects(): ProjectCollection {
    return this.domainModel.projects;
  }

  public getContexts(): ContextCollection {
    return this.domainModel.contexts;
  }

  public getStateModels(): StateModelCollection {
    return this.domainModel.stateModels;
  }

  public getDomainModel(): RootAggregate {
    return this.domainModel;
  }

  public currentTopic(): Topic {
    return this.topic;
  }

  public availableTopics(): Topic[] {
    return this.topics;
  }

  public processObjectEvent(objectEvent: ObjectEvent): void {
    const objectEventForCurrentTopic = (objectEvent.topic === this.topic.id);
    if (!objectEventForCurrentTopic) {
      return;
    }
    this.updateModelWithObjectEvent(objectEvent);
    this.backend.storeObjectEvent(objectEvent);
  }

  public processObjectEvents(objectEvents: ObjectEvent[]): void {
    objectEvents.forEach(objectEvent => {
      this.processObjectEvent(objectEvent);
    });
  }

  public switchToTopic(topic: Topic): void {
    const switchToCurrentTopic = (topic === this.topic);
    if (switchToCurrentTopic) {
      return;
    }

    this.commandProcessor = new ObjectEventCommandProcessor();
    this.domainModel = RootAggregate.createEmptyRootAggregate();
    this.topic = topic;
    this.backend.switchToTopic(this.topic);
  }

  public createTopic(name: string): void {
    const newTopicId = UUIDGenerator.createUUID();
    const newTopic = new Topic(newTopicId, name);
    this.backend.storeTopic(newTopic);
    this.topics.push(newTopic);
  }

  private updateModelWithObjectEvent(objectEvent: ObjectEvent): void {
    this.commandProcessor.process(objectEvent);
  }

  private connectWithBackend(): void {
    this.newObjectEvents = this.backend.getNewObjectEvents().subscribe(objectEvent => {
      this.updateModelWithObjectEvent(objectEvent);
    });
    this.newTopicEvents = this.backend.getNewTopics().subscribe(topic => {
      this.topics.push(topic);
      if (this.topic === undefined) {
        this.switchToTopic(topic);
      }
    });
  }

  private disconnectFromBackend(): void {
    this.newObjectEvents.unsubscribe();
    this.newTopicEvents.unsubscribe();
  }
}
