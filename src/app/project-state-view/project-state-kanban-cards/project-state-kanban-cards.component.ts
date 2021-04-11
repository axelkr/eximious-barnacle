import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../../domain-services/project.service';
import { KanbanCard, Project, State, TransitionType } from 'outstanding-barnacle';
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
  cardsInProgress: KanbanCard[] | undefined;
  cardsReadyToDraw: Map<State, KanbanCard[]> = new Map<State, KanbanCard[]>();

  constructor(public projectService: ProjectService, public kanbanCardService: KanbanCardService) { }

  ngOnInit(): void {
  }

  public sortDescendingByAgeInCurrentState(cards: KanbanCard[]): KanbanCard[] {
    cards.sort((aCard, anotherCard) => {
      const aCardInCurrentStateSince = aCard.history.currentStateTransition()?.occurredAt;
      const anotherCardInCurrentStateSince = anotherCard.history.currentStateTransition()?.occurredAt;
      if (aCardInCurrentStateSince === undefined) {
        return -1;
      }
      if (anotherCardInCurrentStateSince === undefined) {
        return 1;
      }
      return aCardInCurrentStateSince.getTime() - anotherCardInCurrentStateSince.getTime();
    });
    return cards;
  }
}
