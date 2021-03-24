import { Injectable } from '@angular/core';

import { StateModel, StateModelEventFactory } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../domain-services/heijunka-board.service';

@Injectable({
  providedIn: 'root'
})
export class StateModelService {
  private readonly eventFactory = new StateModelEventFactory();

  constructor(private modelBoardService: HeijunkaBoardService) { }

  public create(stateModel: StateModel) {
    const createStateModelEvent = this.eventFactory.create(this.modelBoardService.currentTopic(), stateModel);
    this.modelBoardService.processObjectEvent(createStateModelEvent);
  }

  public availableStateModels(): StateModel[] {
    return this.modelBoardService.getDomainModel().stateModels.getStateModels();
  }

  public has(id: string): boolean {
    return this.modelBoardService.getDomainModel().stateModels.has(id);
  }
}
