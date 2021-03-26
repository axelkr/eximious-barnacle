import { Injectable } from '@angular/core';

import { KanbanCard, Project, State, KanbanCardProperties, KanbanCardEventFactory } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../domain-services/heijunka-board.service';
import { TopicService } from './topic.service';
import { ContextService } from './context.service';

@Injectable({
  providedIn: 'root'
})
export class KanbanCardService {
  private readonly kanbanCardEventFactory = new KanbanCardEventFactory();

  constructor(private modelBoardService: HeijunkaBoardService,
    private topicService: TopicService, private contextService: ContextService) { }

  public pull(aKanbanCard: KanbanCard, aState: State): void {
    if (aKanbanCard === undefined || aState === undefined) {
      return;
    }

    const pullToState = this.kanbanCardEventFactory.moveToInProgress(this.topicService.current(),
      aKanbanCard, aState);
    this.modelBoardService.processObjectEvent(pullToState);
  }

  public moveToTrash(aKanbanCard: KanbanCard): void {
    if (aKanbanCard === undefined) {
      return;
    }
    const moveToTrash = this.kanbanCardEventFactory.moveToTrash(this.topicService.current(),
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

    const currentState = this.modelBoardService.getDomainModel().stateModels
      .get(project.stateModelId).getState(currentStateTransition.state);
    const moveToCompleteState = this.kanbanCardEventFactory.moveToComplete(this.topicService.current(),
      aKanbanCard, currentState);
    this.modelBoardService.processObjectEvent(moveToCompleteState);
  }

  public projectsKanbanCard(aProject: Project): KanbanCard[] {
    return this.find({ project: aProject });
  }

  public create(name: string, aProject: Project) {
    const stateModel = this.modelBoardService.getDomainModel().stateModels.get(aProject.stateModelId);
    const createKanbanCardEvents = this.kanbanCardEventFactory.create(this.topicService.current(),
      name, aProject, stateModel);
    this.modelBoardService.processObjectEvents(createKanbanCardEvents);
  }

  public renameTo(kanbanCard: KanbanCard, newName: string): void {
    if (kanbanCard === undefined) {
      return;
    }
    const renameKanbanCardEvent = this.kanbanCardEventFactory.
      updateProperty(this.topicService.current(), kanbanCard, KanbanCardProperties.NAME, newName);
    this.modelBoardService.processObjectEvent(renameKanbanCardEvent);
  }

  public find(parameters: any): KanbanCard[] {
    return this.modelBoardService.getDomainModel().kanbanCards.find(parameters)
      .filter(aKanbanCard => this.contextService.isIdActive(aKanbanCard.id));
  }

  public get(id: string): KanbanCard {
    return this.modelBoardService.getDomainModel().kanbanCards.get(id);
  }
}
