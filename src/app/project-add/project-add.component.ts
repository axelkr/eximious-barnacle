import { Component, OnInit } from '@angular/core';
import { HeijunkaBoardService } from '../heijunka-board.service';
import { State, StateModel } from 'outstanding-barnacle';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.less']
})
export class ProjectAddComponent implements OnInit {
  // 1. display available state models with the currently selected as pre-selected
  // 2. offers to add pre-defined state models
  predefinedModels: StateModel[] = [];
  model = { name: '' };

  constructor(private modelBoardService: HeijunkaBoardService) {
    this.initializePredefinedModels();
  }

  ngOnInit(): void {
  }

  onSubmit() { }

  newProject(): void {
    const objectEvent = this.modelBoardService.eventFactory.createProject(this.modelBoardService.currentTopic, this.model.name);
    this.modelBoardService.processObjectEvent(objectEvent);
  }


  private initializePredefinedModels() {
    this.predefinedModels.push(this.definePersonalKanban());
    this.predefinedModels.push(this.defineProjectManagerKanban());
  }

  private definePersonalKanban(): StateModel {
    const states: State[] = [];
    states.push(new State('Backlog', 'Backlog'));
    states.push(new State('Doing', 'Doing'));
    states.push(new State('Done', 'Done'));
    const initialState = states[0];
    const finalStates = [states[2]];
    const personalKanban = new StateModel('PersonalKanban', 'PersonalKanban', states, initialState, finalStates);
    personalKanban.setSuccessorOf(states[0], states[1]);
    personalKanban.setSuccessorOf(states[1], states[2]);
    return personalKanban;
  }

  private defineProjectManagerKanban(): StateModel {
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

    const projectManagerKanban = new StateModel('GettingThingsDone', 'GettingThingsDone', states, inboxState, [trashState, doneState]);
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

    return projectManagerKanban;
  }
}
