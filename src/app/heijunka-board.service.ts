import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ObjectEvent } from 'choicest-barnacle';
import {
  HeijunkaBoard, ObjectEventFactory, ObjectEventCommandProcessor,
  ProjectEventFactory, KanbanCardEventFactory
} from 'outstanding-barnacle';

import { ObjectStoreBackendService } from './backend/object-store-backend.service';

@Injectable({
  providedIn: 'root'
})
export class HeijunkaBoardService implements OnDestroy {
  readonly eventFactory = new ObjectEventFactory();
  readonly projectEventFactory = new ProjectEventFactory();
  readonly kanbanCardEventFactory = new KanbanCardEventFactory();
  readonly currentTopic = 'currentTopic';

  private commandProcessor = new ObjectEventCommandProcessor();
  private heijunkaBoard: HeijunkaBoard;
  private newObjectEvents: Subscription;

  constructor(private backend: ObjectStoreBackendService) {
    this.heijunkaBoard = this.commandProcessor.get();

    this.newObjectEvents = backend.getNewObjectEvents().subscribe(objectEvent => {
      this.updateModelWithObjectEvent(objectEvent);
    });

    backend.switchToTopic(this.currentTopic);
  }

  ngOnDestroy() {
    this.newObjectEvents.unsubscribe();
  }

  getHeijunkaBoard(): HeijunkaBoard {
    return this.heijunkaBoard;
  }

  public processObjectEvent(objectEvent: ObjectEvent): void {
    this.updateModelWithObjectEvent(objectEvent);
    this.backend.storeObjectEvent(objectEvent);
  }

  public processObjectEvents(objectEvents: ObjectEvent[]): void {
    objectEvents.forEach(objectEvent => {
      this.processObjectEvent(objectEvent);
    });
  }

  private updateModelWithObjectEvent(objectEvent: ObjectEvent): void {
    this.heijunkaBoard = this.commandProcessor.process(objectEvent);
  }
}
