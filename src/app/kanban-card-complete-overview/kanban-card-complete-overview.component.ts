import { Component, OnInit, Input } from '@angular/core';
import { KanbanCard , State} from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../heijunka-board.service';

@Component({
  selector: 'app-kanban-card-complete-overview',
  templateUrl: './kanban-card-complete-overview.component.html',
  styleUrls: ['./kanban-card-complete-overview.component.less']
})
export class KanbanCardCompleteOverviewComponent implements OnInit {
  @Input() kanbanCard: KanbanCard | undefined;
  @Input() state: State | undefined;

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
}
