import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { KanbanCardCreateComponent } from './kanban-card-create/kanban-card-create.component';
import { KanbanCardOverviewComponent } from './kanban-card-overview/kanban-card-overview.component';
import { KanbanCardEditableNameComponent } from './kanban-card-editable-name/kanban-card-editable-name.component';

@NgModule({
  declarations: [
    KanbanCardCreateComponent, KanbanCardOverviewComponent, KanbanCardEditableNameComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [KanbanCardCreateComponent, KanbanCardOverviewComponent, KanbanCardEditableNameComponent]
})
export class KanbanCardModule { }
