import { Component, OnInit, Input } from '@angular/core';
import { Project, State } from 'outstanding-barnacle';

@Component({
  selector: 'app-project-state',
  templateUrl: './project-state.component.html',
  styleUrls: ['./project-state.component.less']
})
export class ProjectStateComponent implements OnInit {
  @Input() project: Project | undefined;
  @Input() state: State | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
