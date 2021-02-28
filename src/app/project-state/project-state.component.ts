import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HeijunkaBoardService } from '../heijunka-board.service';
import { Project, State, TransitionType } from 'outstanding-barnacle';

@Component({
  selector: 'app-project-state',
  templateUrl: './project-state.component.html',
  styleUrls: ['./project-state.component.less']
})
export class ProjectStateComponent implements OnInit {
  @Input() project: Project | undefined;
  @Input() state: State | undefined;
  transitionType = TransitionType;

  constructor(private router: Router, private route: ActivatedRoute, public heijunkaBoardService: HeijunkaBoardService) { }

  ngOnInit(): void {
  }

}
