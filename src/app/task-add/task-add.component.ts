import { Component, OnInit } from '@angular/core';
import { ModelTasksService } from '../model-tasks.service';
import { ObjectEventFactoryService } from '../object-event-factory.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.less']
})
export class TaskAddComponent implements OnInit {
  model = {name:'',state:'To Do'};
  states = ['To Do', 'In Work', 'Done'];

  constructor(private modelTasksService: ModelTasksService,
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
