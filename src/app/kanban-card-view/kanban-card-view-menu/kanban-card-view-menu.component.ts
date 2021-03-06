import { Component, OnInit, Input } from '@angular/core';
import { KanbanCard, State } from 'outstanding-barnacle';
import { ProjectService } from '../../domain-services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kanban-card-view-menu',
  templateUrl: './kanban-card-view-menu.component.html'
})
export class KanbanCardViewMenuComponent implements OnInit {
  @Input() kanbanCard: KanbanCard | undefined;
  @Input() state: State | undefined;

  constructor(private router: Router, public projectService: ProjectService) { }

  ngOnInit(): void {
  }

}
