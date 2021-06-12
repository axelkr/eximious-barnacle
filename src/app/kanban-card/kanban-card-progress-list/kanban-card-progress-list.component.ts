import { Component, OnInit, } from '@angular/core';
import { KanbanCardService } from '../../domain-services/kanban-card.service';
import { ProjectService } from '../../domain-services/project.service';

@Component({
  selector: 'app-kanban-card-progress-list',
  templateUrl: './kanban-card-progress-list.component.html'
})
export class KanbanCardProgressListComponent implements OnInit {
  constructor(public projectService: ProjectService, public kanbanCardService: KanbanCardService) { }

  ngOnInit(): void {
  }
}
