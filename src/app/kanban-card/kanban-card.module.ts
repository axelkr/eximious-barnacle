import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KanbanCardCreateComponent } from './kanban-card-create/kanban-card-create.component';

@NgModule({
  declarations: [
    KanbanCardCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [KanbanCardCreateComponent]
})
export class KanbanCardModule { }
