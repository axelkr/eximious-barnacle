import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { CumulativeFlowChartModule } from '../cumulative-flow-chart/cumulative-flow-chart.module';
import { KanbanCardModule } from '../kanban-card/kanban-card.module';

import { HeijunkaBoardViewComponent } from './heijunka-board-view.component';
import { ProjectComponent } from './project/project.component';
import { ProjectStateComponent } from './project-state/project-state.component';
import { ProjectModule } from '../project/project.module';

@NgModule({
  declarations: [HeijunkaBoardViewComponent,
    ProjectComponent,
    ProjectStateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    CumulativeFlowChartModule,
    KanbanCardModule,
    ProjectModule
  ],
  exports: [HeijunkaBoardViewComponent]
})
export class HeijunkaBoardViewModule { }
