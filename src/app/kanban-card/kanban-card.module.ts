import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KanbanCardCreateComponent } from './kanban-card-create/kanban-card-create.component';
import { KanbanCardCompleteOverviewComponent } from './kanban-card-complete-overview/kanban-card-complete-overview.component';
import { KanbanCardOverviewComponent } from './kanban-card-overview/kanban-card-overview.component';
import { KanbanCardInProgressOverviewComponent } from './kanban-card-in-progress-overview/kanban-card-in-progress-overview.component';

@NgModule({
  declarations: [
    KanbanCardCreateComponent, KanbanCardCompleteOverviewComponent, KanbanCardInProgressOverviewComponent, KanbanCardOverviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [KanbanCardCreateComponent, KanbanCardCompleteOverviewComponent,
    KanbanCardInProgressOverviewComponent, KanbanCardOverviewComponent]
})
export class KanbanCardModule { }
