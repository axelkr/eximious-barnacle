import { Component, OnInit, Input } from '@angular/core';
import { HeijunkaBoardService } from '../heijunka-board.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Project, State, TransitionType } from 'outstanding-barnacle';

@Component({
  selector: 'app-project-state-details',
  templateUrl: './project-state-details.component.html',
  styleUrls: ['./project-state-details.component.less']
})
export class ProjectStateDetailsComponent implements OnInit {
  @Input() project: string | undefined;
  @Input() state: string | undefined;
  transitionType = TransitionType;

  constructor(private router: Router, private route: ActivatedRoute,public heijunkaBoardService: HeijunkaBoardService) { }

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
