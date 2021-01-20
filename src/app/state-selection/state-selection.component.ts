import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../model/task';

@Component({
  selector: 'app-state-selection',
  templateUrl: './state-selection.component.html',
  styleUrls: ['./state-selection.component.less']
})
export class StateSelectionComponent implements OnInit {
  @Input() task: Task | undefined;
  states = ['To Do', 'In Work', 'Done'];

  selectedState: string | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.selectedState = this.task?.state;
  }

  onChange(): void {
    console.log("changed to .."+this.selectedState+" for task "+this.task?.id);
    //const objectEvent = this.objectEventFactory.constructCreateTaskEvent(this.model.name,this.model.state);
    //this.modelTasksService.processObjectEvent(objectEvent);
  }
}
