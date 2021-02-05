import { Component, OnInit, Input } from '@angular/core';
import { KanbanCard, State } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../heijunka-board.service';

@Component({
  selector: 'app-kanban-card-complete-overview',
  templateUrl: './kanban-card-complete-overview.component.html',
  styleUrls: ['./kanban-card-complete-overview.component.less']
})
export class KanbanCardCompleteOverviewComponent implements OnInit {
  @Input() kanbanCard: KanbanCard | undefined;
  @Input() state: State | undefined;
  renameMode = false;

  constructor(private modelBoardService: HeijunkaBoardService) { }

  ngOnInit(): void {
  }

  pull(): void {
    if (this.kanbanCard === undefined || this.state === undefined) {
      return;
    }

    const pullToState = this.modelBoardService.eventFactory.moveKanbanCardInProgress(this.modelBoardService.currentTopic,
      this.kanbanCard, this.state);
    this.modelBoardService.processObjectEvent(pullToState);
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
    const renameEvent = this.modelBoardService.eventFactory.renameKanbanCard(this.modelBoardService.currentTopic, this.kanbanCard, newName);
    this.modelBoardService.processObjectEvent(renameEvent);
  }
}
