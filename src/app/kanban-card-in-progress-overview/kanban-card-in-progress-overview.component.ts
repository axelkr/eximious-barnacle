import { Component, OnInit, Input } from '@angular/core';
import { KanbanCard, KanbanCardProperties, Project } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../heijunka-board.service';

@Component({
  selector: 'app-kanban-card-in-progress-overview',
  templateUrl: './kanban-card-in-progress-overview.component.html',
  styleUrls: ['./kanban-card-in-progress-overview.component.less']
})
export class KanbanCardInProgressOverviewComponent implements OnInit {
  @Input() project: Project | undefined;
  @Input() kanbanCard: KanbanCard | undefined;
  renameMode = false;

  constructor(private modelBoardService: HeijunkaBoardService) { }

  ngOnInit(): void {
  }

  markAsCompleted(): void {
    if (this.kanbanCard === undefined) {
      return;
    }

    if (this.project === undefined) {
      return;
    }

    const currentStateTransition = this.kanbanCard.history.currentStateTransition();
    if (currentStateTransition === undefined) {
      return;
    }

    const currentState = this.modelBoardService.getDomainModel().getStateModelOf(this.project).getState(currentStateTransition.state);
    const moveToCompleteState = this.modelBoardService.kanbanCardEventFactory.moveToComplete(this.modelBoardService.currentTopic(),
      this.kanbanCard, currentState);
    this.modelBoardService.processObjectEvent(moveToCompleteState);
  }

  moveToTrash(): void {
    if (this.kanbanCard === undefined) {
      return;
    }
    const moveToTrash = this.modelBoardService.kanbanCardEventFactory.moveToTrash(this.modelBoardService.currentTopic(),
      this.kanbanCard);
    this.modelBoardService.processObjectEvent(moveToTrash);
  }

  commitRename(event: any): void {
    this.renameTo(event.target.value);
    this.renameMode = false;
  }

  cancelRename(): void {
    this.renameMode = false;
  }

  activateRenameMode(): void {
    this.renameMode = true;
  }

  private renameTo(newName: string): void {
    if (this.kanbanCard === undefined) {
      return;
    }
    const renameEvent = this.modelBoardService.kanbanCardEventFactory.
      updateProperty(this.modelBoardService.currentTopic(), this.kanbanCard, KanbanCardProperties.NAME, newName);
    this.modelBoardService.processObjectEvent(renameEvent);
  }
}
