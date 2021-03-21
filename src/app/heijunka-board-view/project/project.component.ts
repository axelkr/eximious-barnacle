import { Component, Input } from '@angular/core';
import { Project } from 'outstanding-barnacle';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.less']
})
export class ProjectComponent {
  @Input() project: Project | undefined;

  constructor() { }
}
