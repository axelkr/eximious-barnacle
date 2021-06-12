import { Component, OnInit } from '@angular/core';
import { HeijunkaBoardService } from '../../domain-services/heijunka-board.service';
import { State, StateModel } from 'outstanding-barnacle';
import { StateModelService } from '../../domain-services/state-model.service';

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html'
})
export class FocusComponent implements OnInit {
  private readonly personalKanbanStateModelId = 'Personal Kanban';
  private readonly projectManagerKanbanStateModelId = 'Project Manager Kanban';

  constructor(public modelBoardService: HeijunkaBoardService, public stateModelService: StateModelService) {
  }

  ngOnInit(): void {
  }

  public personalKanbanPartOfStateModels(): boolean {
    return this.stateModelService.has(this.personalKanbanStateModelId);
  }

  public projectManagerKanbanPartOfStateModels(): boolean {
    return this.stateModelService.has(this.projectManagerKanbanStateModelId);
  }

  public addPersonalKanban() {
    const states: State[] = [];
    states.push(State.generateState('Backlog'));
    states.push(State.generateState('Doing'));
    states.push(State.generateState('Done'));
    states.push(State.generateState('Trash'));
    const initialState = states[0];
    const trashState = states[3];
    const finalStates = [states[2]];
    const personalKanban = new StateModel(this.personalKanbanStateModelId, this.personalKanbanStateModelId,
      states, initialState, finalStates, trashState);
    personalKanban.setSuccessorOf(states[0], states[1]);
    personalKanban.setSuccessorOf(states[1], states[2]);
    this.stateModelService.create(personalKanban);
  }

  public addProjectManagerKanban() {
    const inboxState = State.generateState('Inbox');
    const trashState = State.generateState('Trash');
    const definingState = State.generateState('Defining');
    const implementingState = State.generateState('Implementing');
    const goLiveState = State.generateState('Go-Live');
    const doneState = State.generateState('Done');
    const waitingForDefiningState = State.generateState('Waiting for (defining)');
    const waitingForImplementingState = State.generateState('Waiting for (implementing)');

    const states: State[] = [inboxState, trashState, definingState, implementingState, goLiveState,
      doneState, waitingForDefiningState, waitingForImplementingState];

    const projectManagerKanban = new StateModel(this.projectManagerKanbanStateModelId, this.projectManagerKanbanStateModelId,
      states, inboxState, [trashState, doneState], trashState);
    ;
    // expected traversal: Inbox -> Defining -> Implementing -> Go-Live -> Done
    projectManagerKanban.setSuccessorOf(inboxState, definingState);
    projectManagerKanban.setSuccessorOf(definingState, implementingState);
    projectManagerKanban.setSuccessorOf(implementingState, goLiveState);
    projectManagerKanban.setSuccessorOf(goLiveState, doneState);
    // small stuff can be done immediately
    projectManagerKanban.setSuccessorOf(inboxState, doneState);
    // dependency on others can happen
    projectManagerKanban.setSuccessorOf(definingState, waitingForDefiningState);
    projectManagerKanban.setSuccessorOf(waitingForDefiningState, definingState);
    projectManagerKanban.setSuccessorOf(implementingState, waitingForImplementingState);
    projectManagerKanban.setSuccessorOf(waitingForImplementingState, implementingState);
    this.stateModelService.create(projectManagerKanban);
  }

  public onStateFocusChange(state: State, event: any) {
    const isChecked: boolean = event.target.checked;
    if (isChecked) {
      this.stateModelService.focusOn(state);
    } else {
      this.stateModelService.removeFocusOn(state);
    }
  }
}
