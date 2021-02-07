import { Component, OnInit, Input } from '@angular/core';
import { HeijunkaBoardService } from '../heijunka-board.service';
import { Project, State, TransitionType } from 'outstanding-barnacle';

@Component({
  selector: 'app-project-state-kanban-cards-by-age',
  templateUrl: './project-state-kanban-cards-by-age.component.html',
  styleUrls: ['./project-state-kanban-cards-by-age.component.less']
})
export class ProjectStateKanbanCardsByAgeComponent implements OnInit {
  @Input() project: string | undefined;
  @Input() state: string | undefined;
  transitionType = TransitionType;

  constructor(public heijunkaBoardService: HeijunkaBoardService) { }

  ngOnInit(): void {
  }

}
