import { Component, OnInit } from '@angular/core';
import { HeijunkaBoardService } from '../heijunka-board.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.less']
})
export class ProjectAddComponent implements OnInit {
  // 1. user has to select a state model for a new project
  model = { name: '' };

  constructor(private modelBoardService: HeijunkaBoardService) {
  }

  ngOnInit(): void {
  }

  onSubmit() { }

  newProject(): void {
    const objectEvent = this.modelBoardService.eventFactory.createProject(this.modelBoardService.currentTopic, this.model.name);
    this.modelBoardService.processObjectEvent(objectEvent);
  }
}
