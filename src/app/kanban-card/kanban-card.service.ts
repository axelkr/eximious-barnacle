import { Injectable } from '@angular/core';

import { KanbanCard, Project, State, TransitionType } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../heijunka-board.service';

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

}