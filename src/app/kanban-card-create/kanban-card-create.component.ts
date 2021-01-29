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
    const project = this.modelBoardService.getHeijunkaBoard().projects.find(aProject => aProject.id === this.project);
    if (project !== undefined) {
      const objectEvent = this.modelBoardService.eventFactory.createKanbanCard(this.modelBoardService.currentTopic,
        project, this.model.name);
      this.modelBoardService.processObjectEvent(objectEvent);
      const createdKanbanCard = this.modelBoardService.getHeijunkaBoard().kanbanCards.find(aCard => aCard.id === objectEvent.object);
      if (createdKanbanCard === undefined) {
        throw new Error('could not find kanban card just created');
      } else {
        // TODO: add to domain: find KanbanCard / Project based on id
        // TODO: move this functionality to a domain service
        // TODO: stateModel.states[0] is not the correct way to find initial state ==> move functionality to stateModel
        const initialState: State = this.modelBoardService.getHeijunkaBoard().stateModel.states[0];
        const moveToInitialState = this.modelBoardService.eventFactory.moveKanbanCardComplete(this.modelBoardService.currentTopic,
          createdKanbanCard, initialState);
        this.modelBoardService.processObjectEvent(moveToInitialState);
      }
    } else {
      throw new Error('could not find project with id ' + this.project);
    }
  }

}
