import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HeijunkaBoardService } from '../../heijunka-board.service';
import { Project, State, TransitionType } from 'outstanding-barnacle';

@Component({
  selector: 'app-project-state-overview',
  templateUrl: './project-state-overview.component.html',
  styleUrls: ['./project-state-overview.component.less']
})
export class ProjectStateOverviewComponent implements OnInit {
  @Input() project: Project | undefined;
  @Input() state: State | undefined;
  transitionType = TransitionType;

  constructor(private router: Router, private route: ActivatedRoute, public heijunkaBoardService: HeijunkaBoardService) { }

  ngOnInit(): void {
  }

}
