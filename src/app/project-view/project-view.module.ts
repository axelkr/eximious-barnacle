import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectModule } from '../project/project.module';
import { ContextModule } from '../context/context.module';
import { MenuModule } from '../menu/menu.module';
import { KanbanCardModule } from '../kanban-card/kanban-card.module';
import { CumulativeFlowChartModule } from '../cumulative-flow-chart/cumulative-flow-chart.module';

import { ProjectViewRoutingModule } from './project-view-routing.module';
import { ProjectEditableNameComponent } from './project-editable-name/project-editable-name.component';
import { ProjectViewComponent } from './project-view.component';


@NgModule({
  declarations: [ProjectViewComponent, ProjectEditableNameComponent],
  imports: [
    CommonModule,
    ProjectModule,
    KanbanCardModule,
    ProjectViewRoutingModule,
    CumulativeFlowChartModule,
    ContextModule, MenuModule
  ]
})
export class ProjectViewModule { }
