import { Component, OnInit } from '@angular/core';
import { HeijunkaBoardService } from '../../domain-services/heijunka-board.service';
import { StateModel } from 'outstanding-barnacle';
import { ProjectService } from '../../domain-services/project.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.less']
})
export class ProjectAddComponent implements OnInit {
  model: { name: string; stateModel: StateModel | undefined } = { name: '', stateModel: undefined };

  constructor(public modelBoardService: HeijunkaBoardService, private projectService: ProjectService) {
  }

  ngOnInit(): void {
  }

  addProject(): void {
    const isDoubleSubmit = (this.model.name === null || this.model.name.length === 0);
    if (isDoubleSubmit || this.model.stateModel === undefined) {
      return;
    }
    this.projectService.create(this.model.name, this.model.stateModel);
  }
}
