import { Component, OnInit, Input } from '@angular/core';
import { KanbanCard, State } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../../domain-services/heijunka-board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kanban-card-view-title',
  templateUrl: './kanban-card-view-title.component.html'
})
export class KanbanCardViewTitleComponent implements OnInit {
  @Input() kanbanCard: KanbanCard | undefined;
  @Input() state: State | undefined;

  constructor(private router: Router, public boardService: HeijunkaBoardService) { }

  ngOnInit(): void {
  }

}
