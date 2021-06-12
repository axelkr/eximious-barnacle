import { Component, OnInit, Input } from '@angular/core';
import { KanbanCard } from 'outstanding-barnacle';

@Component({
  selector: 'app-kanban-card-list',
  templateUrl: './kanban-card-list.component.html'
})
export class KanbanCardListComponent implements OnInit {
  @Input() kanbanCards: KanbanCard[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
