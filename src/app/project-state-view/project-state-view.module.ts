import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProjectStateViewComponent } from './project-state-view.component';
import { ProjectStateKanbanCardsByAgeComponent } from './project-state-kanban-cards-by-age/project-state-kanban-cards-by-age.component';
import { ProjectStateKanbanCardsComponent } from './project-state-kanban-cards/project-state-kanban-cards.component';
import { KanbanCardModule } from '../kanban-card/kanban-card.module';
import { ProjectStateViewRoutingModule } from './project-state-view-routing.module';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [ProjectStateViewComponent,
    ProjectStateKanbanCardsByAgeComponent, ProjectStateKanbanCardsComponent, TitleComponent],
  imports: [
    CommonModule,
    FormsModule,
    KanbanCardModule,
    ProjectStateViewRoutingModule
  ],
  exports: [ProjectStateViewComponent]
})
export class ProjectStateViewModule { }
