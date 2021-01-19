import { TestBed } from '@angular/core/testing';

import { ProcessCreateTaskService } from './process-create-task.service';

import { Task } from './task';
import { ObjectEvent } from './objectEvent';

describe('ProcessCreateTaskService', () => {
  let service: ProcessCreateTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessCreateTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should discard CreateTaskEvent if already created', () => {
    const inputTasks: Task[] = [];
    const aCreateTaskEvent: ObjectEvent = {
      topic: 'aTopic',
      time: new Date(),
      id: 23,
      eventType: service.objectEventTypeProcessing,
      object: 'asda_asda_asdads',
      objectType: 'objectType',
      payload: new Map<string,string>([['name','name'],['state','state']])
    };
    const afterProcessingEventOnce = service.process(aCreateTaskEvent,inputTasks);
    const afterProcessingEventTwice = service.process(aCreateTaskEvent,afterProcessingEventOnce);
    expect(afterProcessingEventTwice.length).toEqual(inputTasks.length+1);
  });

  it('should apply CreateTaskEvent if task id is not yet available', () => {
    const inputTasks: Task[] = [];
    const aCreateTaskEvent: ObjectEvent = {
      topic: 'aTopic',
      time: new Date(),
      id: 23,
      eventType: service.objectEventTypeProcessing,
      object: 'asda_asda_asdads',
      objectType: 'objectType',
      payload: new Map<string,string>([['name','name'],['state','state']])
    };
    const afterProcessingEventOnce = service.process(aCreateTaskEvent,inputTasks);
    expect(afterProcessingEventOnce.length).toEqual(inputTasks.length+1);
  });
});
