import { Component, OnInit, Input } from '@angular/core';
import { KanbanCard } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../heijunka-board.service';

@Component({
  selector: 'app-kanban-card-in-progress-overview',
  templateUrl: './kanban-card-in-progress-overview.component.html',
  styleUrls: ['./kanban-card-in-progress-overview.component.less']
})
export class KanbanCardInProgressOverviewComponent implements OnInit {
  @Input() kanbanCard: KanbanCard | undefined;

  constructor(private modelBoardService: HeijunkaBoardService) { }

  ngOnInit(): void {
  }

  markAsCompleted(): void {
    if (this.kanbanCard === undefined) {
      return;
    }

    const currentState = this.modelBoardService.getHeijunkaBoard().stateModel.getState(
      this.kanbanCard.history.currentStateTransition().state);
    const moveToCompleteState = this.modelBoardService.eventFactory.moveKanbanCardComplete(this.modelBoardService.currentTopic,
      this.kanbanCard, currentState);
    this.modelBoardService.processObjectEvent(moveToCompleteState);
  }
}