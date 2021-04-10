import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContextModule } from '../context/context.module';
import { KanbanCardModule } from '../kanban-card/kanban-card.module';

import { ProjectStateViewComponent } from './project-state-view.component';
import { ProjectStateKanbanCardsComponent } from './project-state-kanban-cards/project-state-kanban-cards.component';
import { ProjectStateViewRoutingModule } from './project-state-view-routing.module';
import { ProjectStateViewTitleComponent } from './project-state-view-title/project-state-view-title.component';

@NgModule({
  declarations: [ProjectStateViewComponent,
    ProjectStateKanbanCardsComponent, ProjectStateViewTitleComponent],
  imports: [
    CommonModule,
    FormsModule,
    KanbanCardModule,
    ProjectStateViewRoutingModule,
    ContextModule
  ],
  exports: [ProjectStateViewComponent]
})
export class ProjectStateViewModule { }
