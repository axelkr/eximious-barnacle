import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../heijunka-board.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.less']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project | undefined;

  constructor(public heijunkaBoardService: HeijunkaBoardService) { }

  ngOnInit(): void {
  }

}
