import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanCardViewComponent } from './kanban-card-view.component';
import { KanbanCardViewTitleComponent } from './kanban-card-view-title/kanban-card-view-title.component';
import { KanbanCardModule } from '../kanban-card/kanban-card.module';
import { KanbanCardViewRoutingModule } from './kanban-card-view-routing.module';


@NgModule({
  declarations: [KanbanCardViewComponent, KanbanCardViewTitleComponent],
  imports: [
    CommonModule,
    KanbanCardModule,
    KanbanCardViewRoutingModule
  ],
  exports: [KanbanCardViewComponent]
})
export class KanbanCardViewModule { }
