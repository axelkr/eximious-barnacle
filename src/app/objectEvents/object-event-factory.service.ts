import { Injectable } from '@angular/core';
import { ObjectEvent } from './objectEvent';

import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class ObjectEventFactoryService {
  public readonly currentTopic: string = 'constTopic';

  constructor() { }

  public constructCreateTaskEvent(name: string, state: string): ObjectEvent {
    const eventIdDiscardedByBackend = 0;
    const createObjectEvent: ObjectEvent = {
      topic: this.currentTopic,
      time: new Date(),
      id: eventIdDiscardedByBackend,
      eventType: 'CreateTask',
      object: this.createUUID(),
      objectType: 'Task',
      payload: new Map([['name', name], ['state', state]])
    };
    return createObjectEvent;
  }

  public constructUpdateStateEvent(task: Task, newState: string): ObjectEvent {
    const eventIdDiscardedByBackend = 0;
    const updateStateEvent: ObjectEvent = {
      topic: this.currentTopic,
      time: new Date(),
      id: eventIdDiscardedByBackend,
      eventType: 'UpdateTaskState',
      object: task.id,
      objectType: 'Task',
      payload: new Map([['state', newState]])
    };
    return updateStateEvent;
  }

  private createUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) { // eslint-disable-line
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);// eslint-disable-line
      return v.toString(16);
    });
  }
}
