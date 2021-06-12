import { Pipe, PipeTransform } from '@angular/core';
import { KanbanCard } from 'outstanding-barnacle';
import { ProjectService } from '../domain-services/project.service';
import { StateModelService } from '../domain-services/state-model.service';

@Pipe({
  name: 'kanbanCardInFocus'
})
export class KanbanCardInFocusPipe implements PipeTransform {
  constructor(public projectService: ProjectService, public stateModelService: StateModelService) {
  }

  transform(kanbanCards: KanbanCard[]): KanbanCard[] {
    return kanbanCards.filter(aKanbanCard => {
      const lastTransition = aKanbanCard.history.currentStateTransition();
      const stateIsInFocus = (lastTransition !== undefined) && this.stateModelService.isInFocus(lastTransition.state);
      return this.projectService.isInFocus(aKanbanCard.project) && stateIsInFocus;
    });
  }
}
