import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../heijunka-board.service';

@Component({
  selector: 'app-kanban-card-create',
  templateUrl: './kanban-card-create.component.html',
  styleUrls: ['./kanban-card-create.component.less']
})
export class KanbanCardCreateComponent implements OnInit {
  @Input() project: Project | undefined;
  model = { name: '' };

  constructor(private modelBoardService: HeijunkaBoardService) { }

  ngOnInit(): void {
  }

  newKanbanCard(): void {
    if (this.project === undefined) {
      return;
    }

    const project = this.project;
    const stateModel = this.modelBoardService.getHeijunkaBoard().getStateModelOf(project);

    const createKanbanCardEvents = this.modelBoardService.kanbanCardEventFactory.create(this.modelBoardService.currentTopic,
      this.model.name, project, stateModel);
    this.modelBoardService.processObjectEvents(createKanbanCardEvents);
  }
}
