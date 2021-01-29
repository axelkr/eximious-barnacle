import { Component, OnInit } from '@angular/core';
import { HeijunkaBoardService } from '../heijunka-board.service';

@Component({
  selector: 'app-kanban-card-create',
  templateUrl: './kanban-card-create.component.html',
  styleUrls: ['./kanban-card-create.component.less']
})
export class KanbanCardCreateComponent implements OnInit {
  model = { name: '' };

  constructor(private modelBoardService: HeijunkaBoardService) { }

  ngOnInit(): void {
  }

  onSubmit() { }

  newKanbanCard(): void {
    const project = this.modelBoardService.getHeijunkaBoard().projects[0];
    const objectEvent = this.modelBoardService.eventFactory.createKanbanCard(this.modelBoardService.currentTopic,
      project, this.model.name);
    this.modelBoardService.processObjectEvent(objectEvent);
  }

}
