import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanCardViewComponent } from './kanban-card-view.component';
import { KanbanCardModule } from '../kanban-card/kanban-card.module';


@NgModule({
  declarations: [
    KanbanCardViewComponent
  ],
  imports: [
    CommonModule,
    KanbanCardModule
  ]
})
export class KanbanCardViewModule { }
