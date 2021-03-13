import { Component, OnInit } from '@angular/core';
import { HeijunkaBoardService } from '../heijunka-board.service';
import { StateModel } from 'outstanding-barnacle';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.less']
})
export class ProjectAddComponent implements OnInit {
  model: { name: string; stateModel: StateModel | undefined } = { name: '', stateModel: undefined };

  constructor(public modelBoardService: HeijunkaBoardService) {
  }

  ngOnInit(): void {
  }

  onSubmit() { }

  newProject(): void {
    const createProjectEvent = this.modelBoardService.eventFactory.createProject(this.modelBoardService.currentTopic, 
      this.model.stateModel as StateModel);
      // TODO: initialize name of project
    this.modelBoardService.processObjectEvent(createProjectEvent);
  }
}
