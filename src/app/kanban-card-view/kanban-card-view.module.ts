import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanCardModule } from '../kanban-card/kanban-card.module';
import { KanbanCardViewRoutingModule } from './kanban-card-view-routing.module';

import { KanbanCardViewComponent } from './kanban-card-view.component';
import { KanbanCardViewTitleComponent } from './kanban-card-view-title/kanban-card-view-title.component';
import { KanbanCardViewTransitionsComponent } from './kanban-card-view-transitions/kanban-card-view-transitions.component';
import { KanbanCardViewContextSelectionComponent } from './kanban-card-view-context-selection/kanban-card-view-context-selection.component';
import { KanbanCardViewTasksComponent } from './kanban-card-view-tasks/kanban-card-view-tasks.component';


@NgModule({
  declarations: [KanbanCardViewComponent, KanbanCardViewTitleComponent,
    KanbanCardViewTransitionsComponent, KanbanCardViewContextSelectionComponent, KanbanCardViewTasksComponent],
  imports: [
    CommonModule,
    KanbanCardModule,
    KanbanCardViewRoutingModule
  ],
  exports: [KanbanCardViewComponent]
})
export class KanbanCardViewModule { }
