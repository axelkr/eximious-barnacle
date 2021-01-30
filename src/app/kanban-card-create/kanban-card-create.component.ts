import { Component, OnInit, Input } from '@angular/core';
import { State } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../heijunka-board.service';

@Component({
  selector: 'app-kanban-card-create',
  templateUrl: './kanban-card-create.component.html',
  styleUrls: ['./kanban-card-create.component.less']
})
export class KanbanCardCreateComponent implements OnInit {
  @Input() project: string | undefined;
  model = { name: '' };

  constructor(private modelBoardService: HeijunkaBoardService) { }

  ngOnInit(): void {
  }

  onSubmit() { }

  newKanbanCard(): void {
    if (this.project === undefined) {
      return;
    }
    if (!this.modelBoardService.getHeijunkaBoard().hasProject(this.project)) {
      throw new Error('could not find project with id ' + this.project);
    }

    const project = this.modelBoardService.getHeijunkaBoard().getProject(this.project);

    const createKanbanCardEvent = this.modelBoardService.eventFactory.createKanbanCard(this.modelBoardService.currentTopic,
      project, this.model.name);
    this.modelBoardService.processObjectEvent(createKanbanCardEvent);
    const createdKanbanCard = this.modelBoardService.getHeijunkaBoard().getKanbanCard(createKanbanCardEvent.object);

    const initialState: State = this.modelBoardService.getHeijunkaBoard().stateModel.initialState();
    const moveToInitialState = this.modelBoardService.eventFactory.moveKanbanCardInProgress(this.modelBoardService.currentTopic,
      createdKanbanCard, initialState);
    this.modelBoardService.processObjectEvent(moveToInitialState);

  }
}
