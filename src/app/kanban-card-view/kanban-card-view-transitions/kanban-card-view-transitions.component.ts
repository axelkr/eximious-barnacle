import { Component, OnInit, Input } from '@angular/core';
import { KanbanCard } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../../heijunka-board.service';
import { KanbanCardService } from '../../kanban-card/kanban-card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kanban-card-view-transitions',
  templateUrl: './kanban-card-view-transitions.component.html'
})
export class KanbanCardViewTransitionsComponent implements OnInit {
  @Input() kanbanCard: KanbanCard | undefined;

  constructor(private router: Router, public boardService: HeijunkaBoardService, public kanbanCardService: KanbanCardService) { }

  ngOnInit(): void {
  }

}
