import { Injectable } from '@angular/core';
import { ProcessObjectEventService} from './processObjectEventService';
import { ObjectEvent } from './objectEvent';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class ProcessCreateTaskService implements ProcessObjectEventService {
  readonly objectEventTypeProcessing: string = 'CreateTask';

  constructor() { }

  process(objectEvent: ObjectEvent, tasks: Task[]): Task[] {
    const result = [...tasks];
    let name = objectEvent.payload.get('name');
    if (name === undefined) {
      name = '';
    }
    let state = objectEvent.payload.get('state');
    if (state === undefined) {
      state = '';
    }
    if ( ! this.objectAlreadyCreated(tasks,objectEvent.object)) {
      result.push({id:objectEvent.object,name,state});
    }
    return result;
  }

  private objectAlreadyCreated(tasks: Task[], objectId: string): boolean {
    let alreadyCreated = false;
    tasks.forEach(aTask => {
      if ( aTask.id === objectId) {
        alreadyCreated = true;
      }
    });
    return alreadyCreated;
  }
}
