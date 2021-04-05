import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectService } from '../../domain-services/project.service';
import { Project, State, TransitionType } from 'outstanding-barnacle';
import { KanbanCardService } from '../../domain-services/kanban-card.service';

@Component({
  selector: 'app-project-state-overview',
  templateUrl: './project-state-overview.component.html',
  styleUrls: ['./project-state-overview.component.less']
})
export class ProjectStateOverviewComponent implements OnInit {
  @Input() project: Project | undefined;
  @Input() state: State | undefined;
  @Input() color: string | undefined;

  transitionType = TransitionType;

  constructor(private router: Router, public projectService: ProjectService, public kanbanCardService: KanbanCardService) { }

  ngOnInit(): void {
  }

}
