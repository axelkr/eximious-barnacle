import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic.service';
import { ObjectEventFactoryService } from '../objectEvents/object-event-factory.service';
import {State} from '../model/state';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.less']
})
export class TaskAddComponent implements OnInit {
  model = {name:'',state:State.ToDo};
  states = Object.values(State);

  constructor(private modelTasksService: TopicService,
    private objectEventFactory: ObjectEventFactoryService) {
   }

  ngOnInit(): void {
  }

  onSubmit() { }

  newTask(): void {
    const objectEvent = this.objectEventFactory.constructCreateTaskEvent(this.model.name,this.model.state);
    this.modelTasksService.processObjectEvent(objectEvent);
  }
}
