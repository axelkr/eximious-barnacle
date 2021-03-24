import { Component, OnInit, Input } from '@angular/core';
import { KanbanCard, State, TransitionType } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../../heijunka-board.service';
import { KanbanCardService } from '../../kanban-card/kanban-card.service';

@Component({
  selector: 'app-kanban-card-view-transitions',
  templateUrl: './kanban-card-view-transitions.component.html'
})
export class KanbanCardViewTransitionsComponent implements OnInit {
  @Input() kanbanCard: KanbanCard | undefined;
  @Input() state: State | undefined;
  transitionType = TransitionType;
  transition: TransitionType | undefined;

  constructor(public boardService: HeijunkaBoardService, public kanbanCardService: KanbanCardService) { }

  ngOnInit(): void {
    this.readTransitionTypeOfKanbanCard();
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
    console.log(currentTransition.type);
    this.transition = currentTransition.type;
  }
}
