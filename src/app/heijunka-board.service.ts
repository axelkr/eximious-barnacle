import { Injectable , OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';

import { HeijunkaBoard, ObjectEventFactory, ObjectEvent, ObjectEventCommandProcessor} from 'outstanding-barnacle';

import { ObjectStoreBackendService } from './backend/object-store-backend.service';

@Injectable({
  providedIn: 'root'
})
export class HeijunkaBoardService implements OnDestroy {
  readonly eventFactory = new ObjectEventFactory();
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

  private updateModelWithObjectEvent(objectEvent: ObjectEvent): void {
    this.heijunkaBoard = this.commandProcessor.process(objectEvent);
  }
}
