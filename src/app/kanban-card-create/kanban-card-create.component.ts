import { Component, OnInit, Input } from '@angular/core';
import { State, Project } from 'outstanding-barnacle';
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

    const initialState: State | undefined = this.modelBoardService.getHeijunkaBoard().stateModels
      .find(aStateModel => aStateModel.id === project.stateModelId)?.initialState();
    if (initialState === undefined) {
      throw new Error('not reachable');
    }

    const createKanbanCardEvent = this.modelBoardService.eventFactory.createKanbanCard(this.modelBoardService.currentTopic,
      project);
    this.modelBoardService.processObjectEvent(createKanbanCardEvent);
    const createdKanbanCard = this.modelBoardService.getHeijunkaBoard().getKanbanCard(createKanbanCardEvent.object);
    // TODO: set name of new Kanban card
    const moveToInitialState = this.modelBoardService.eventFactory.moveKanbanCardInProgress(this.modelBoardService.currentTopic,
      createdKanbanCard, initialState);
    this.modelBoardService.processObjectEvent(moveToInitialState);

  }
}
