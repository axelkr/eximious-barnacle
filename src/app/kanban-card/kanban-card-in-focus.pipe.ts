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
    const firstDate: Date = dates.length === 0 ? new Date(0) : dates[0];
    const secondDate: Date = dates.length < 2 ? new Date(2050, 11, 23) : dates[1];
    secondDate.setDate(1 + secondDate.getDate());
    secondDate.setHours(0, 0, 0, 0);
    return kanbanCards.filter(aKanbanCard => {
      if (!this.projectService.isInFocus(aKanbanCard.project)) {
        return false;
      }
      const lastTransition = aKanbanCard.history.currentStateTransition();
      if (lastTransition === undefined) {
        return true;
      }
      if (!this.stateModelService.isInFocus(lastTransition.state)) {
        return false;
      }
      return aKanbanCard.history.transitions.find(aTransition => { return aTransition.occurredAt >= firstDate && aTransition.occurredAt <= secondDate }) !== undefined;
    });
  }
}
