import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KanbanCardModule } from '../kanban-card/kanban-card.module';
import { MenuModule } from '../menu/menu.module';
import { KanbanCardViewRoutingModule } from './kanban-card-view-routing.module';

import { KanbanCardViewComponent } from './kanban-card-view.component';
import { KanbanCardViewTitleComponent } from './kanban-card-view-title/kanban-card-view-title.component';
import { KanbanCardViewTransitionsComponent } from './kanban-card-view-transitions/kanban-card-view-transitions.component';
import { KanbanCardViewContextSelectionComponent } from './kanban-card-view-context-selection/kanban-card-view-context-selection.component';
import { KanbanCardViewTasksComponent } from './kanban-card-view-tasks/kanban-card-view-tasks.component';
import { KanbanCardEditableNameComponent } from './kanban-card-editable-name/kanban-card-editable-name.component';
import { DoneTasksPipe } from './done-tasks.pipe';


@NgModule({
  declarations: [KanbanCardViewComponent, KanbanCardViewTitleComponent, KanbanCardEditableNameComponent,
    DoneTasksPipe,
    KanbanCardViewTransitionsComponent, KanbanCardViewContextSelectionComponent, KanbanCardViewTasksComponent],
  imports: [
    CommonModule, FormsModule, MenuModule,
    KanbanCardModule, KanbanCardViewRoutingModule
  ],
  exports: [KanbanCardViewComponent]
})
export class KanbanCardViewModule { }
