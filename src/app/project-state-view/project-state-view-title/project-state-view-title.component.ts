import { Component, OnInit, Input } from '@angular/core';
import { Project, State } from 'outstanding-barnacle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-state-view-title',
  templateUrl: './project-state-view-title.component.html'
})
export class ProjectStateViewTitleComponent implements OnInit {
  @Input() project: Project | undefined;
  @Input() state: State | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
