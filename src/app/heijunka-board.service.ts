import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ObjectEvent, Topic } from 'choicest-barnacle';
import {
  HeijunkaBoard, ObjectEventFactory, ObjectEventCommandProcessor,
  ProjectEventFactory, KanbanCardEventFactory, UUIDGenerator,
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
  private commandProcessor!: ObjectEventCommandProcessor;
  private heijunkaBoard!: HeijunkaBoard;
  private newObjectEvents!: Subscription;
  private newTopicEvents!: Subscription;

  constructor(private backend: ObjectStoreBackendService) {
    this.switchToTopic(new Topic('currentTopic', 'currentTopic'));
  }

  ngOnDestroy() {
    this.newObjectEvents.unsubscribe();
    this.newTopicEvents.unsubscribe();
  }

  getHeijunkaBoard(): HeijunkaBoard {
    return this.heijunkaBoard;
  }

  currentTopic(): Topic {
    return this.topic;
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
    this.commandProcessor = new ObjectEventCommandProcessor();
    this.heijunkaBoard = this.commandProcessor.get();
    this.topic = topic;

    this.newObjectEvents = this.backend.getNewObjectEvents().subscribe(objectEvent => {
      this.updateModelWithObjectEvent(objectEvent);
    });

    this.backend.switchToTopic(this.topic);
  }

  public createTopic(name: string): void {
    const newTopicId = UUIDGenerator.createUUID();
    const newTopic = new Topic(newTopicId,name);
    this.backend.storeTopic(newTopic);
  }

  private updateModelWithObjectEvent(objectEvent: ObjectEvent): void {
    this.heijunkaBoard = this.commandProcessor.process(objectEvent);
  }
}
