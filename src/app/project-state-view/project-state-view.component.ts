import { Component, OnInit, Input } from '@angular/core';
import { HeijunkaBoardService } from '../domain-services/heijunka-board.service';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../domain-services/project.service';

@Component({
  selector: 'app-project-state-view',
  templateUrl: './project-state-view.component.html',
  styleUrls: ['./project-state-view.component.less']
})
export class ProjectStateViewComponent implements OnInit {
  @Input() project: string | undefined;
  @Input() state: string | undefined;

  constructor(private route: ActivatedRoute, public heijunkaBoardService: HeijunkaBoardService,
    public projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params.project !== undefined) {
        this.project = params.project;
      }
      if (params.state !== undefined) {
        this.state = params.state;
      };
    });
  }
}
