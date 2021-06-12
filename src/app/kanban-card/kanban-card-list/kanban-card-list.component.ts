import { Component, OnInit, Input } from '@angular/core';
import { KanbanCard } from 'outstanding-barnacle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kanban-card-list',
  templateUrl: './kanban-card-list.component.html'
})
export class KanbanCardListComponent implements OnInit {
  @Input() kanbanCards: KanbanCard[] | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
