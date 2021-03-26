import { Component, OnInit, Input } from '@angular/core';
import { KanbanCard } from 'outstanding-barnacle';

@Component({
  selector: 'app-kanban-card-view-context-selection',
  templateUrl: './kanban-card-view-context-selection.component.html'
})
export class KanbanCardViewContextSelectionComponent implements OnInit {
  @Input() kanbanCard: KanbanCard | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
