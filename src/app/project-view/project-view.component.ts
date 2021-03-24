import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../domain-services/project.service';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html'
})
export class ProjectViewComponent implements OnInit {
  @Input() id: string | undefined;

  constructor(private route: ActivatedRoute, public projectService: ProjectService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params.id !== undefined) {
        this.id = params.id;
      }
    });
  }

}
