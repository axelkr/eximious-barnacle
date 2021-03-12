import { Component, OnInit } from '@angular/core';
import { HeijunkaBoardService } from '../heijunka-board.service';
import { State, StateModel } from 'outstanding-barnacle';

@Component({
  selector: 'app-state-models',
  templateUrl: './state-models.component.html',
  styleUrls: ['./state-models.component.less']
})
export class StateModelsComponent implements OnInit {
  private readonly personalKanbanStateModelId = 'Personal Kanban';
  private readonly projectManagerKanbanStateModelId = 'Project Manager Kanban';

  constructor(public modelBoardService: HeijunkaBoardService) {
  }

  ngOnInit(): void {
  }

  public personalKanbanPartOfStateModels(): boolean {
    return -1 < this.modelBoardService.getHeijunkaBoard()
      .stateModels.findIndex(aStateModel => aStateModel.id === this.personalKanbanStateModelId);
  }

  public projectManagerKanbanPartOfStateModels(): boolean {
    return -1 < this.modelBoardService.getHeijunkaBoard()
      .stateModels.findIndex(aStateModel => aStateModel.id === this.projectManagerKanbanStateModelId);
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
    this.addStateModel(personalKanban);
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
    this.addStateModel(projectManagerKanban);
  }

  private addStateModel(aStateModel: StateModel) {
    const createStateModelEvent = this.modelBoardService.eventFactory.createStateModel(this.modelBoardService.currentTopic, aStateModel);
    this.modelBoardService.processObjectEvent(createStateModelEvent);
  }
}
