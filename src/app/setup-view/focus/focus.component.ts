import { Component, OnInit } from '@angular/core';
import { HeijunkaBoardService } from '../../domain-services/heijunka-board.service';
import { Project, State } from 'outstanding-barnacle';
import { StateModelService } from '../../domain-services/state-model.service';
import { ProjectService } from '../../domain-services/project.service';

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html'
})
export class FocusComponent implements OnInit {

  constructor(public modelBoardService: HeijunkaBoardService, public stateModelService: StateModelService,
    public projectService: ProjectService) {
  }

  ngOnInit(): void {
  }

  public onStateFocusChange(state: State, event: any) {
    const isChecked: boolean = event.target.checked;
    if (isChecked) {
      this.stateModelService.focusOn(state);
    } else {
      this.stateModelService.removeFocusOn(state);
    }
  }

  public onProjectFocusChange(project: Project, event: any) {
    const isChecked: boolean = event.target.checked;
    if (isChecked) {
      this.projectService.focusOn(project);
    } else {
      this.projectService.removeFocusOn(project);
    }
  }
}
