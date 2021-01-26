import { Injectable } from '@angular/core';

import { HeijunkaBoard, ObjectEventFactory, ObjectEvent, ObjectEventCommandProcessor} from 'outstanding-barnacle';

import { ObjectStoreBackendService } from './backend/object-store-backend.service';

@Injectable({
  providedIn: 'root'
})
export class HeijunkaBoardService {
  readonly eventFactory = new ObjectEventFactory();
  readonly currentTopic = 'currentTopic';

  private commandProcessor = new ObjectEventCommandProcessor();
  private heijunkaBoard: HeijunkaBoard;

  constructor(private backend: ObjectStoreBackendService) {
    this.heijunkaBoard = this.commandProcessor.get();

    backend.getAllObjectEventsOfTopic(this.currentTopic)
    .subscribe(x => x.forEach(a => this.updateModelWithObjectEvent(a)));
  }

  getHeijunkaBoard(): HeijunkaBoard {
    return this.heijunkaBoard;
  }

  public processObjectEvent(objectEvent: ObjectEvent): void {
    this.updateModelWithObjectEvent(objectEvent);
    this.backend.storeObjectEvent(objectEvent);
  }

  private updateModelWithObjectEvent(objectEvent: ObjectEvent): void {
    this.heijunkaBoard = this.commandProcessor.process(objectEvent);
  }
}
