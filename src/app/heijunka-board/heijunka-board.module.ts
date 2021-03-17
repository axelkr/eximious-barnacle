import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { CumulativeFlowChartModule } from '../cumulative-flow-chart/cumulative-flow-chart.module';

import { HeijunkaBoardComponent } from './heijunka-board.component';
import { ProjectComponent } from './project/project.component';
import { ProjectStateComponent } from './project-state/project-state.component';
import { KanbanCardCreateComponent } from './kanban-card-create/kanban-card-create.component';
import { ViewProjectsStateModelComponent } from './view-projects-state-model/view-projects-state-model.component';

@NgModule({
  declarations: [HeijunkaBoardComponent,
    ProjectComponent,
    ProjectStateComponent,
    KanbanCardCreateComponent,
    ViewProjectsStateModelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    CumulativeFlowChartModule
  ],
  exports: [HeijunkaBoardComponent]
})
export class HeijunkaBoardModule { }
