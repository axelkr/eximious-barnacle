import { Component, OnInit, Input } from '@angular/core';
import { KanbanCard, Project, State, TransitionType } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../../heijunka-board.service';

@Component({
  selector: 'app-kanban-card-overview',
  templateUrl: './kanban-card-overview.component.html'
})
export class KanbanCardOverviewComponent implements OnInit {
  @Input() kanbanCard: KanbanCard | undefined;
  @Input() state: State | undefined;
  transitionType = TransitionType;
  transition: TransitionType | undefined;

  constructor(private modelBoardService: HeijunkaBoardService) { }

  ngOnInit(): void {
    this.readTransitionTypeOfKanbanCard();
  }

  pull(): void {
    if (this.kanbanCard === undefined || this.state === undefined) {
      return;
    }

    const pullToState = this.modelBoardService.kanbanCardEventFactory.moveToInProgress(this.modelBoardService.currentTopic(),
      this.kanbanCard, this.state);
    this.modelBoardService.processObjectEvent(pullToState);
  }

  markAsCompleted(): void {
    if (this.kanbanCard === undefined) {
      return;
    }

    const currentStateTransition = this.kanbanCard.history.currentStateTransition();
    if (currentStateTransition === undefined) {
      return;
    }

    const project: Project = this.modelBoardService.getProjects().get(this.kanbanCard.project);

    const currentState = this.modelBoardService.getDomainModel().getStateModelOf(project).getState(currentStateTransition.state);
    const moveToCompleteState = this.modelBoardService.kanbanCardEventFactory.moveToComplete(this.modelBoardService.currentTopic(),
      this.kanbanCard, currentState);
    this.modelBoardService.processObjectEvent(moveToCompleteState);
  }

  moveToTrash(): void {
    if (this.kanbanCard === undefined || this.state === undefined) {
      return;
    }
    const moveToTrash = this.modelBoardService.kanbanCardEventFactory.moveToTrash(this.modelBoardService.currentTopic(),
      this.kanbanCard);
    this.modelBoardService.processObjectEvent(moveToTrash);
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
