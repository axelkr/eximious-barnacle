import { Component, OnInit } from '@angular/core';
import { TopicService } from '../model-tasks.service';
import { ObjectEventFactoryService } from '../objectEvents/object-event-factory.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.less']
})
export class TaskAddComponent implements OnInit {
  model = {name:'',state:'To Do'};
  states = ['To Do', 'In Work', 'Done'];

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
