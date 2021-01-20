import { Injectable } from '@angular/core';
import { ObjectEvent } from './objectEvents/objectEvent';
import { Topic } from './model/topic';

import { ObjectStoreBackendService } from './backend/object-store-backend.service';
import { ObjectEventFactoryService } from './objectEvents/object-event-factory.service';
import { ProcessCreateTask } from './objectEvents/processCreateTask';
import { ProcessUpdateState } from './objectEvents/processUpdateState';
import { ProcessObjectEventCommand} from './objectEvents/processObjectEventCommand';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private topic: Topic;
  private commands: Map<string,ProcessObjectEventCommand> = new Map<string,ProcessObjectEventCommand>();

  constructor(private backend: ObjectStoreBackendService, private objectEventFactory: ObjectEventFactoryService) {
    this.topic = new Topic();
    const availableCommands: ProcessObjectEventCommand[] = [];
    availableCommands.push(new ProcessCreateTask());
    availableCommands.push(new ProcessUpdateState());    

    availableCommands.forEach(aService => this.commands.set(aService.objectEventTypeProcessing,aService));

    backend.getAllObjectEventsOfTopic(this.objectEventFactory.currentTopic).subscribe(x=>x.forEach(a=>this.updateModelWithObjectEvent(a)));
  }

  getTopic(): Topic {
    return this.topic;
  }

  public processObjectEvent(objectEvent: ObjectEvent): void {
    this.updateModelWithObjectEvent(objectEvent);
    this.backend.storeObjectEvent(objectEvent);
  }

  private updateModelWithObjectEvent(objectEvent: ObjectEvent): void {
    if ( ! this.commands.has(objectEvent.eventType)) {
      throw new Error('unknown object event '+objectEvent.eventType);
    }
    const aProcessor = this.commands.get(objectEvent.eventType);
    if (aProcessor !== undefined) {
      this.topic.tasks = aProcessor.process(objectEvent,this.topic.tasks);
    }
  }
}
