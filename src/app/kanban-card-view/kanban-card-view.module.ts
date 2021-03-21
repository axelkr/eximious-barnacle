import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanCardViewComponent } from './kanban-card-view.component';
import { KanbanCardModule } from '../kanban-card/kanban-card.module';
import { KanbanCardViewRoutingModule } from './kanban-card-view-routing.module';


@NgModule({
  declarations: [KanbanCardViewComponent],
  imports: [
    CommonModule,
    KanbanCardModule,
    KanbanCardViewRoutingModule
  ]
})
export class KanbanCardViewModule { }
