import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ObjectEvent, Topic } from 'choicest-barnacle';
import { HeijunkaBoard, ObjectEventCommandProcessor } from 'outstanding-barnacle';

import { ObjectStoreBackendService } from '../backend/object-store-backend.service';

@Injectable({
  providedIn: 'root'
})
export class HeijunkaBoardService implements OnDestroy {
  private current!: Topic;
  private commandProcessor!: ObjectEventCommandProcessor;
  private newObjectEvents!: Subscription;

  constructor(private backend: ObjectStoreBackendService) {
    this.connectWithBackend();
  }

  ngOnDestroy() {
    this.disconnectFromBackend();
  }

  public getDomainModel(): HeijunkaBoard {
    return this.commandProcessor.getHeijunkaBoard();
  }

  public processObjectEvent(objectEvent: ObjectEvent): void {
    const objectEventForCurrentTopic = (objectEvent.topic === this.current.id);
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
    this.current = topic;
  }

  private updateModelWithObjectEvent(objectEvent: ObjectEvent): void {
    this.commandProcessor.process(objectEvent);
  }

  private connectWithBackend(): void {
    this.newObjectEvents = this.backend.getNewObjectEvents().subscribe(objectEvent => {
      this.updateModelWithObjectEvent(objectEvent);
    });
  }

  private disconnectFromBackend(): void {
    this.newObjectEvents.unsubscribe();
  }
}
