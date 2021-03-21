import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { ProjectStateViewComponent } from './project-state-view.component';
import { ProjectStateKanbanCardsByAgeComponent } from './project-state-kanban-cards-by-age/project-state-kanban-cards-by-age.component';
import { ProjectStateKanbanCardsComponent } from './project-state-kanban-cards/project-state-kanban-cards.component';
import { KanbanCardModule } from '../kanban-card/kanban-card.module';

@NgModule({
  declarations: [ProjectStateViewComponent,
    ProjectStateKanbanCardsByAgeComponent, ProjectStateKanbanCardsComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    KanbanCardModule
  ],
  exports: [ProjectStateViewComponent]
})
export class ProjectStateViewModule { }
