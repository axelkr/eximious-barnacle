import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProjectStateOverviewComponent } from './project-state-overview/project-state-overview.component';
import { ProjectStateModelComponent } from './project-state-model/project-state-model.component';

@NgModule({
  declarations: [ProjectStateOverviewComponent, ProjectStateModelComponent],
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  exports: [ProjectStateOverviewComponent, ProjectStateModelComponent]
})
export class ProjectModule { }
