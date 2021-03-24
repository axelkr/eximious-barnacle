import { Injectable } from '@angular/core';

import { KanbanCard, Project, State, KanbanCardProperties } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../domain-services/heijunka-board.service';

@Injectable({
  providedIn: 'root'
})
export class KanbanCardService {

  constructor(private modelBoardService: HeijunkaBoardService) { }

  public pull(aKanbanCard: KanbanCard, aState: State): void {
    if (aKanbanCard === undefined || aState === undefined) {
      return;
    }

    const pullToState = this.modelBoardService.kanbanCardEventFactory.moveToInProgress(this.modelBoardService.currentTopic(),
      aKanbanCard, aState);
    this.modelBoardService.processObjectEvent(pullToState);
  }

  public moveToTrash(aKanbanCard: KanbanCard): void {
    if (aKanbanCard === undefined) {
      return;
    }
    const moveToTrash = this.modelBoardService.kanbanCardEventFactory.moveToTrash(this.modelBoardService.currentTopic(),
      aKanbanCard);
    this.modelBoardService.processObjectEvent(moveToTrash);
  }

  public markAsCompleted(aKanbanCard: KanbanCard): void {
    if (aKanbanCard === undefined) {
      return;
    }

    const currentStateTransition = aKanbanCard.history.currentStateTransition();
    if (currentStateTransition === undefined) {
      return;
    }

    const project = this.modelBoardService.getDomainModel().projects.get(aKanbanCard.project);

    const currentState = this.modelBoardService.getDomainModel().getStateModelOf(project).getState(currentStateTransition.state);
    const moveToCompleteState = this.modelBoardService.kanbanCardEventFactory.moveToComplete(this.modelBoardService.currentTopic(),
      aKanbanCard, currentState);
    this.modelBoardService.processObjectEvent(moveToCompleteState);
  }

  public projectsKanbanCard(aProject: Project): KanbanCard[] {
    return this.modelBoardService.getDomainModel().kanbanCards.find({ project: aProject });
  }

  public create(name: string, aProject: Project) {
    const stateModel = this.modelBoardService.getDomainModel().getStateModelOf(aProject);
    const createKanbanCardEvents = this.modelBoardService.kanbanCardEventFactory.create(this.modelBoardService.currentTopic(),
      name, aProject, stateModel);
    this.modelBoardService.processObjectEvents(createKanbanCardEvents);
  }

  public renameTo(kanbanCard: KanbanCard, newName: string): void {
    if (kanbanCard === undefined) {
      return;
    }
    const renameKanbanCardEvent = this.modelBoardService.kanbanCardEventFactory.
      updateProperty(this.modelBoardService.currentTopic(), kanbanCard, KanbanCardProperties.NAME, newName);
    this.modelBoardService.processObjectEvent(renameKanbanCardEvent);
  }

  public find(parameters: any): KanbanCard[] {
    return this.modelBoardService.getDomainModel().kanbanCards.find(parameters);
  }

  public get(id: string): KanbanCard {
    return this.modelBoardService.getDomainModel().kanbanCards.get(id);
  }
}
