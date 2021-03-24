import { Component, OnInit, Input } from '@angular/core';
import { Project, LinearizeStateModelService } from 'outstanding-barnacle';
import { ProjectService } from '../../domain-services/project.service';

@Component({
  selector: 'app-project-state-model',
  templateUrl: './project-state-model.component.html'
})
export class ProjectStateModelComponent implements OnInit {
  @Input() project: Project | undefined;
  linearizeStateModelService = new LinearizeStateModelService();

  constructor(public projectService: ProjectService) { }

  ngOnInit(): void {
  }

}
