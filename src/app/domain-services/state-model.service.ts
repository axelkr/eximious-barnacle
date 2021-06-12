import { Injectable } from '@angular/core';

import { State, StateModel, StateModelEventFactory } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../domain-services/heijunka-board.service';
import { TopicService } from './topic.service';
import { SettingsService } from '../backend/settings.service';

@Injectable({
  providedIn: 'root'
})
export class StateModelService {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public static readonly STATES_IN_FOCUS_SETTING: string = 'StatesInFocus';
  private readonly eventFactory = new StateModelEventFactory();

  constructor(private modelBoardService: HeijunkaBoardService, private topicService: TopicService,
    private settingsService: SettingsService) { }

  public create(stateModel: StateModel) {
    const createStateModelEvent = this.eventFactory.create(this.topicService.current(), stateModel);
    this.modelBoardService.processObjectEvent(createStateModelEvent);
  }

  public availableStateModels(): StateModel[] {
    return this.modelBoardService.getDomainModel().stateModels.getStateModels();
  }

  public has(id: string): boolean {
    return this.modelBoardService.getDomainModel().stateModels.has(id);
  }

  public focusOn(state: State) {
    //
  }

  public removeFocusOn(state: State) {
    //
  }

  public isInFocus(state: State): boolean {
    return true;
  }
}
