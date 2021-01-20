import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic.service';
import { ObjectEventFactoryService } from '../objectEvents/object-event-factory.service';
import {TaskState} from '../model/taskState';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.less']
})
export class TaskAddComponent implements OnInit {
  model = {name:'',state:TaskState.ToDo};
  states = Object.values(TaskState);

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
