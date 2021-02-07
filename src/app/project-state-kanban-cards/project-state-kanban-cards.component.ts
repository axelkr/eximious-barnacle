import { Component, OnInit, Input } from '@angular/core';
import { HeijunkaBoardService } from '../heijunka-board.service';
import { Project, State, TransitionType } from 'outstanding-barnacle';

@Component({
  selector: 'app-project-state-kanban-cards',
  templateUrl: './project-state-kanban-cards.component.html',
  styleUrls: ['./project-state-kanban-cards.component.less']
})
export class ProjectStateKanbanCardsComponent implements OnInit {
  @Input() project: string | undefined;
  @Input() state: string | undefined;
  transitionType = TransitionType;

  constructor(public heijunkaBoardService: HeijunkaBoardService) { }

  ngOnInit(): void {
  }

}
