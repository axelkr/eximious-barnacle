import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Project, State } from 'outstanding-barnacle';

@Component({
  selector: 'app-project-state-details',
  templateUrl: './project-state-details.component.html',
  styleUrls: ['./project-state-details.component.less']
})
export class ProjectStateDetailsComponent implements OnInit {
  @Input() project: string | undefined;
  @Input() state: string | undefined;

  constructor(private router: Router, private route: ActivatedRoute) { }

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
