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

  transform(kanbanCards: KanbanCard[], ...dates: Date[]): KanbanCard[] {
    return kanbanCards.filter(aKanbanCard => {
      const lastTransition = aKanbanCard.history.currentStateTransition();
      const stateIsInFocus = (lastTransition !== undefined) && this.stateModelService.isInFocus(lastTransition.state);
      const afterFirstDate = dates.length === 0 || ((lastTransition !== undefined) && lastTransition.occurredAt >= dates[0]);
      const beforeSecondDate = dates.length < 2 || ((lastTransition !== undefined) && lastTransition.occurredAt <= dates[1]);
      return this.projectService.isInFocus(aKanbanCard.project) && stateIsInFocus && afterFirstDate && beforeSecondDate;
    });
  }
}
