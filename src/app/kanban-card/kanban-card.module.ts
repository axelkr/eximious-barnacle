import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { KanbanCardCreateComponent } from './kanban-card-create/kanban-card-create.component';
import { KanbanCardOverviewComponent } from './kanban-card-overview/kanban-card-overview.component';
import { KanbanCardProgressListComponent } from './kanban-card-progress-list/kanban-card-progress-list.component';
import { KanbanCardListComponent } from './kanban-card-list/kanban-card-list.component';
import { KanbanCardInFocusPipe } from './kanban-card-in-focus.pipe';

@NgModule({
  declarations: [
    KanbanCardCreateComponent, KanbanCardOverviewComponent, KanbanCardProgressListComponent,
    KanbanCardListComponent, KanbanCardInFocusPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [KanbanCardCreateComponent, KanbanCardOverviewComponent, KanbanCardProgressListComponent]
})
export class KanbanCardModule { }
