import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KanbanCardCreateComponent } from './kanban-card-create/kanban-card-create.component';
import { KanbanCardCompleteOverviewComponent } from './kanban-card-complete-overview/kanban-card-complete-overview.component';
import { KanbanCardInProgressOverviewComponent } from './kanban-card-in-progress-overview/kanban-card-in-progress-overview.component';

@NgModule({
  declarations: [
    KanbanCardCreateComponent, KanbanCardCompleteOverviewComponent, KanbanCardInProgressOverviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [KanbanCardCreateComponent, KanbanCardCompleteOverviewComponent, KanbanCardInProgressOverviewComponent]
})
export class KanbanCardModule { }
