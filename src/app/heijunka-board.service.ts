import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ObjectEvent, Topic } from 'choicest-barnacle';
import {
  HeijunkaBoard, ObjectEventFactory, ObjectEventCommandProcessor,
  ProjectEventFactory, KanbanCardEventFactory,
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

  private commandProcessor = new ObjectEventCommandProcessor();
  private heijunkaBoard: HeijunkaBoard;
  private newObjectEvents!: Subscription;

  constructor(private backend: ObjectStoreBackendService) {
    this.heijunkaBoard = this.commandProcessor.get();
    this.switchToTopic(new Topic('currentTopic','currentTopic'));
  }

  ngOnDestroy() {
    this.newObjectEvents.unsubscribe();
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
    this.topic = topic;

    this.newObjectEvents = this.backend.getNewObjectEvents().subscribe(objectEvent => {
      this.updateModelWithObjectEvent(objectEvent);
    });

    this.backend.switchToTopic(this.topic);
  }

  private updateModelWithObjectEvent(objectEvent: ObjectEvent): void {
    this.heijunkaBoard = this.commandProcessor.process(objectEvent);
  }
}
