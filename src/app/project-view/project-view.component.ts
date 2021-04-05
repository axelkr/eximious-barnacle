import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../domain-services/project.service';
import { ColorizeStateModelService, StateToColor } from '../state-model/colorize-state-model.service';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html'
})
export class ProjectViewComponent implements OnInit {
  @Input() id: string | undefined;
  colorOfStates: StateToColor | undefined;

  constructor(private route: ActivatedRoute,
    public projectService: ProjectService,
    private colorizeStateModelService: ColorizeStateModelService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params.id !== undefined) {
        this.id = params.id;
        this.colorOfStates = this.colorizeStateModelService.createColors(this.projectService.getStateModel(params.id));
      }
    });
  }

}
