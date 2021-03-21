import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectViewComponent } from './project-view.component';
import { ProjectModule } from '../project/project.module';
import { KanbanCardModule } from '../kanban-card/kanban-card.module';
import { CumulativeFlowChartModule } from '../cumulative-flow-chart/cumulative-flow-chart.module';
import { ProjectViewRoutingModule } from './project-view-routing.module';


@NgModule({
  declarations: [ProjectViewComponent],
  imports: [
    CommonModule,
    ProjectModule,
    KanbanCardModule,
    ProjectViewRoutingModule,
    CumulativeFlowChartModule
  ]
})
export class ProjectViewModule { }