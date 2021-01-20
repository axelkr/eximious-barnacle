import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../model/task';
import {State} from '../model/state';

import { TopicService } from '../topic.service';
import { ObjectEventFactoryService } from '../objectEvents/object-event-factory.service';

@Component({
  selector: 'app-state-selection',
  templateUrl: './state-selection.component.html',
  styleUrls: ['./state-selection.component.less']
})
export class StateSelectionComponent implements OnInit {
  @Input() task: Task | undefined;
  states = Object.values(State);

  selectedState: string | undefined;

  constructor(private modelTasksService: TopicService,
    private objectEventFactory: ObjectEventFactoryService) {
  }

  ngOnInit(): void {
    this.selectedState = this.task?.state;
  }

  onChange(): void {
    if ( this.task !== undefined && this.selectedState !== undefined) {
      const updateStateEvent = this.objectEventFactory.constructUpdateStateEvent(this.task,this.selectedState);
      this.modelTasksService.processObjectEvent(updateStateEvent);
    }
  }
}
