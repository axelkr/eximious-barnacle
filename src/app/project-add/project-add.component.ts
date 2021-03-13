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
    this.modelBoardService.processObjectEvent(createProjectEvent);

    const createdProject = this.modelBoardService.getHeijunkaBoard().getProject(createProjectEvent.object);
    const setProjectNameEvent = this.modelBoardService.eventFactory.initializeProjectProperty(this.modelBoardService.currentTopic,
      createdProject, 'name', this.model.name);
    this.modelBoardService.processObjectEvent(setProjectNameEvent);
  }
}
