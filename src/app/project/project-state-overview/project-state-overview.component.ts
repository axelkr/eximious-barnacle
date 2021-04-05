import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectService } from '../../domain-services/project.service';
import { Project, State, TransitionType } from 'outstanding-barnacle';
import { KanbanCardService } from '../../domain-services/kanban-card.service';
import { ColorizeStateModelService } from '../../state-model/colorize-state-model.service';

@Component({
  selector: 'app-project-state-overview',
  templateUrl: './project-state-overview.component.html',
  styleUrls: ['./project-state-overview.component.less']
})
export class ProjectStateOverviewComponent implements OnInit, AfterContentInit {
  @Input() project: Project | undefined;
  @Input() state: State | undefined;
  @Input() color: string | undefined;
  myColor: string | undefined;

  transitionType = TransitionType;

  constructor(private router: Router, public projectService: ProjectService,
    public kanbanCardService: KanbanCardService, public colorizeStateModelService: ColorizeStateModelService) { }

  ngAfterContentInit(): void {
    if (this.project === undefined || this.state === undefined) {
      return;
    }
    this.myColor = this.colorizeStateModelService.createColors(this.projectService.getStateModel(this.project)).get(this.state);
  }

  ngOnInit(): void {
  }

}
