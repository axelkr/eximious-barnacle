import { Injectable } from '@angular/core';
import { ObjectEvent } from './objectEvent';
import { Task } from './model/task';
import { Topic } from './model/topic';
import { Observable, of } from 'rxjs';
import { ObjectStoreBackendService } from './backend/object-store-backend.service';
import { ObjectEventFactoryService } from './object-event-factory.service';
import { ProcessCreateTaskService } from './process-create-task.service';
import { ProcessObjectEventService} from './processObjectEventService';

@Injectable({
  providedIn: 'root'
})
export class ModelTasksService {
  private topic: Topic;
  private processors: Map<string,ProcessObjectEventService> = new Map<string,ProcessObjectEventService>();

  constructor(private backend: ObjectStoreBackendService, private objectEventFactory: ObjectEventFactoryService) {
    this.topic = new Topic();
    const availableProcessors: ProcessObjectEventService[] = [];
    availableProcessors.push(new ProcessCreateTaskService());

    availableProcessors.forEach(aService => this.processors.set(aService.objectEventTypeProcessing,aService));

    backend.getAllObjectEventsOfTopic(this.objectEventFactory.currentTopic).subscribe(x=>x.forEach(a=>this.updateModelWithObjectEvent(a)));
  }

  getTasks(): Observable<Task[]> {
    return of(this.topic.tasks);
  }

  public processObjectEvent(objectEvent: ObjectEvent): void {
    this.updateModelWithObjectEvent(objectEvent);
    this.backend.storeObjectEvent(objectEvent);
  }

  private updateModelWithObjectEvent(objectEvent: ObjectEvent): void {
    if ( ! this.processors.has(objectEvent.eventType)) {
      throw new Error('unknown object event '+objectEvent.eventType);
    }
    const aProcessor = this.processors.get(objectEvent.eventType);
    if (aProcessor !== undefined) {
      this.topic.tasks = aProcessor.process(objectEvent,this.topic.tasks);
    }
  }
}
