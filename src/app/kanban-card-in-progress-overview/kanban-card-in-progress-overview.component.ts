import { Component, OnInit, Input } from '@angular/core';
import { KanbanCard } from 'outstanding-barnacle';

@Component({
  selector: 'app-kanban-card-in-progress-overview',
  templateUrl: './kanban-card-in-progress-overview.component.html',
  styleUrls: ['./kanban-card-in-progress-overview.component.less']
})
export class KanbanCardInProgressOverviewComponent implements OnInit {
  @Input() kanbanCard: KanbanCard | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
