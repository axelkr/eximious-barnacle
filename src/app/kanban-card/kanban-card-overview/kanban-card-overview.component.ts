import { Component, OnInit, Input } from '@angular/core';
import { KanbanCard, State, TransitionType } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../../heijunka-board.service';
import { KanbanCardService } from '../kanban-card.service';

@Component({
  selector: 'app-kanban-card-overview',
  templateUrl: './kanban-card-overview.component.html'
})
export class KanbanCardOverviewComponent implements OnInit {
  @Input() kanbanCard: KanbanCard | undefined;
  @Input() state: State | undefined;
  transitionType = TransitionType;
  transition: TransitionType | undefined;

  constructor(private modelBoardService: HeijunkaBoardService, private aKanbanCardService: KanbanCardService) { }

  ngOnInit(): void {
    this.readTransitionTypeOfKanbanCard();
  }

  pull(): void {
    if (this.kanbanCard === undefined || this.state === undefined) {
      return;
    }
    this.aKanbanCardService.pull(this.kanbanCard, this.state);
  }

  markAsCompleted(): void {
    if (this.kanbanCard === undefined) {
      return;
    }
    this.aKanbanCardService.markAsCompleted(this.kanbanCard);
  }

  moveToTrash(): void {
    if (this.kanbanCard === undefined) {
      return;
    }
    this.aKanbanCardService.moveToTrash(this.kanbanCard);
  }

  private readTransitionTypeOfKanbanCard() {
    this.transition = undefined;
    if (this.kanbanCard === undefined) {
      return;
    }

    const currentTransition = this.kanbanCard.history.currentStateTransition();
    if (currentTransition === undefined) {
      return;
    }
    this.transition = currentTransition.type;
  }
}
