import { Component, OnInit } from '@angular/core';
import { HeijunkaBoardService } from '../heijunka-board.service';
import { StateModel } from 'outstanding-barnacle';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.less']
})
export class ProjectAddComponent implements OnInit {
  // 1. user has to select a state model for a new project
  model = { name: '' , stateModel: undefined};

  constructor(public modelBoardService: HeijunkaBoardService) {
  }

  ngOnInit(): void {
  }

  onSubmit() { }

  newProject(): void {
    console.log(this.model.stateModel);
    const objectEvent = this.modelBoardService.eventFactory.createProject(this.modelBoardService.currentTopic, this.model.name);
    this.modelBoardService.processObjectEvent(objectEvent);
  }
}
