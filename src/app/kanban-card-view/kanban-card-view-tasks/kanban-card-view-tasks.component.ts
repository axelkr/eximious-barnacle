import { Component, OnInit, Input } from '@angular/core';
import { KanbanCard } from 'outstanding-barnacle';

@Component({
  selector: 'app-kanban-card-view-tasks',
  templateUrl: './kanban-card-view-tasks.component.html'
})
export class KanbanCardViewTasksComponent implements OnInit {
  @Input() kanbanCard: KanbanCard | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
