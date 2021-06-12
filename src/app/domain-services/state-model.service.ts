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
  private readonly STATES_IN_FOCUS_SETTING: string = 'StatesInFocus';
  private readonly statesInFocusCache: string[];
  private readonly eventFactory = new StateModelEventFactory();

  constructor(private modelBoardService: HeijunkaBoardService, private topicService: TopicService,
    private settingsService: SettingsService) {
    if (!settingsService.has(this.STATES_IN_FOCUS_SETTING)) {
      settingsService.setArray(this.STATES_IN_FOCUS_SETTING, []);
    }
    this.statesInFocusCache = settingsService.getArray(this.STATES_IN_FOCUS_SETTING);
  }

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
    if (this.isInFocus(state)) {
      return;
    }
    const currentStatesInFocus = this.settingsService.getArray(this.STATES_IN_FOCUS_SETTING);
    currentStatesInFocus.push(state.id);
    this.settingsService.setArray(this.STATES_IN_FOCUS_SETTING, currentStatesInFocus);
    this.statesInFocusCache.push(state.id);
  }

  public removeFocusOn(state: State) {
    if (!this.isInFocus(state)) {
      return;
    }
    const currentStatesInFocus: string[] = this.settingsService.getArray(this.STATES_IN_FOCUS_SETTING);
    currentStatesInFocus.splice(currentStatesInFocus.findIndex(anIdInFocus => state.id === anIdInFocus), 1);
    this.settingsService.setArray(this.STATES_IN_FOCUS_SETTING, currentStatesInFocus);
    this.statesInFocusCache.splice(this.statesInFocusCache.findIndex(anIdInFocus => state.id === anIdInFocus), 1);
  }

  public isInFocus(state: State): boolean {
    return this.statesInFocusCache.find(anIdInFocus => state.id === anIdInFocus) !== undefined;
  }
}
