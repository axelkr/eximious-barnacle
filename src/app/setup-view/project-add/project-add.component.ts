import { Component, OnInit } from '@angular/core';
import { HeijunkaBoardService } from '../../heijunka-board.service';
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

  addProject(): void {
    const isDoubleSubmit = ( this.model.name === null || this.model.name.length === 0 );
    if (isDoubleSubmit) {
      return;
    }
    const createdProjectEvents = this.modelBoardService.projectEventFactory.create(this.modelBoardService.currentTopic(),
      this.model.name, this.model.stateModel as StateModel);
    this.modelBoardService.processObjectEvents(createdProjectEvents);
  }
}
