import { Component, OnInit, Input } from '@angular/core';
import { HeijunkaBoardService } from '../../domain-services/heijunka-board.service';
import { Project, State, TransitionType } from 'outstanding-barnacle';
import { KanbanCardService } from '../../domain-services/kanban-card.service';

@Component({
  selector: 'app-project-state-kanban-cards',
  templateUrl: './project-state-kanban-cards.component.html',
  styleUrls: ['./project-state-kanban-cards.component.less']
})
export class ProjectStateKanbanCardsComponent implements OnInit {
  @Input() project: Project | undefined;
  @Input() state: State | undefined;
  transitionType = TransitionType;

  constructor(public heijunkaBoardService: HeijunkaBoardService, public kanbanCardService: KanbanCardService) { }

  ngOnInit(): void {
  }

}
