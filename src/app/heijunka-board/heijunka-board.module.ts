import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { CumulativeFlowChartModule } from '../cumulative-flow-chart/cumulative-flow-chart.module';
import { KanbanCardModule } from '../kanban-card/kanban-card.module';

import { HeijunkaBoardComponent } from './heijunka-board.component';
import { ProjectComponent } from './project/project.component';
import { ProjectStateComponent } from './project-state/project-state.component';

@NgModule({
  declarations: [HeijunkaBoardComponent,
    ProjectComponent,
    ProjectStateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    CumulativeFlowChartModule,
    KanbanCardModule
  ],
  exports: [HeijunkaBoardComponent]
})
export class HeijunkaBoardModule { }
