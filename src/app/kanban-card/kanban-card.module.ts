import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { KanbanCardCreateComponent } from './kanban-card-create/kanban-card-create.component';
import { KanbanCardOverviewComponent } from './kanban-card-overview/kanban-card-overview.component';
import { KanbanCardEditNameComponent } from './kanban-card-edit-name/kanban-card-edit-name.component';

@NgModule({
  declarations: [
    KanbanCardCreateComponent, KanbanCardOverviewComponent, KanbanCardEditNameComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [KanbanCardCreateComponent, KanbanCardOverviewComponent]
})
export class KanbanCardModule { }
