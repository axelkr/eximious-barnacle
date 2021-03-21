import { Component, OnInit, Input } from '@angular/core';
import { Project, LinearizeStateModelService } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../../heijunka-board.service';

@Component({
  selector: 'app-project-state-model',
  templateUrl: './project-state-model.component.html',
  styleUrls: ['./project-state-model.component.less']
})
export class ProjectStateModelComponent implements OnInit {
  @Input() project: Project | undefined;
  linearizeStateModelService = new LinearizeStateModelService();

  constructor(public heijunkaBoardService: HeijunkaBoardService) { }

  ngOnInit(): void {
  }

}
