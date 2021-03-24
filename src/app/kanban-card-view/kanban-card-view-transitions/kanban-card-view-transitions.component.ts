import { Component, OnInit, Input } from '@angular/core';
import { KanbanCard, State, TransitionType } from 'outstanding-barnacle';
import { ProjectService } from '../../domain-services/project.service';
import { KanbanCardService } from '../../domain-services/kanban-card.service';

@Component({
  selector: 'app-kanban-card-view-transitions',
  templateUrl: './kanban-card-view-transitions.component.html'
})
export class KanbanCardViewTransitionsComponent implements OnInit {
  @Input() kanbanCard: KanbanCard | undefined;
  @Input() state: State | undefined;
  transitionType = TransitionType;
  transition: TransitionType | undefined;

  constructor(public kanbanCardService: KanbanCardService,
    public projectService: ProjectService) { }

  ngOnInit(): void {
    this.readTransitionTypeOfKanbanCard();
  }

  // explicitly update transition, so view updates
  public pull(nextState: State) {
    if (this.kanbanCard === undefined) {
      return;
    }
    this.kanbanCardService.pull(this.kanbanCard, nextState);
    this.transition = TransitionType.inProgress;
  }

  // explicitly update transition, so view updates
  public markAsCompleted() {
    if (this.kanbanCard === undefined) {
      return;
    }
    this.kanbanCardService.markAsCompleted(this.kanbanCard);
    this.transition = TransitionType.completed;
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
