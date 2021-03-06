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
    states.push(new State('Backlog', 'Backlog'));
    states.push(new State('Doing', 'Doing'));
    states.push(new State('Done', 'Done'));
    const initialState = states[0];
    const finalStates = [states[2]];
    const personalKanban = new StateModel(this.personalKanbanStateModelId, 'Personal Kanban', states, initialState, finalStates);
    personalKanban.setSuccessorOf(states[0], states[1]);
    personalKanban.setSuccessorOf(states[1], states[2]);
    this.addStateModel(personalKanban);
  }

  public addProjectManagerKanban() {
    const inboxState = new State('Inbox', 'Inbox');
    const trashState = new State('Trash', 'Trash');
    const definingState = new State('Defining', 'Defining');
    const implementingState = new State('Implementing', 'Implementing');
    const goLiveState = new State('Go-Live', 'Go-Live');
    const doneState = new State('Done', 'Done');
    const waitingForDefiningState = new State('Waiting for (defining)', 'Waiting for (defining)');
    const waitingForImplementingState = new State('Waiting for (implementing)', 'Waiting for (implementing)');

    const states: State[] = [inboxState, trashState, definingState, implementingState, goLiveState,
      doneState, waitingForDefiningState, waitingForImplementingState];

    const projectManagerKanban = new StateModel(this.projectManagerKanbanStateModelId, 'Project Manager Kanban',
      states, inboxState, [trashState, doneState]);

    // in every state, cards can be deleted
    projectManagerKanban.setSuccessorOf(inboxState, trashState);
    projectManagerKanban.setSuccessorOf(definingState, trashState);
    projectManagerKanban.setSuccessorOf(implementingState, trashState);
    projectManagerKanban.setSuccessorOf(goLiveState, trashState);
    projectManagerKanban.setSuccessorOf(waitingForDefiningState, trashState);
    projectManagerKanban.setSuccessorOf(waitingForImplementingState, trashState);
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
