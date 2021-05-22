import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContextModule } from '../context/context.module';
import { KanbanCardModule } from '../kanban-card/kanban-card.module';
import { MenuModule } from '../menu/menu.module';

import { ProjectStateViewComponent } from './project-state-view.component';
import { ProjectStateKanbanCardsComponent } from './project-state-kanban-cards/project-state-kanban-cards.component';
import { ProjectStateViewRoutingModule } from './project-state-view-routing.module';
import { ProjectStateViewMenuComponent } from './project-state-view-menu/project-state-view-menu.component';

@NgModule({
  declarations: [ProjectStateViewComponent,
    ProjectStateKanbanCardsComponent, ProjectStateViewMenuComponent],
  imports: [
    CommonModule,
    FormsModule, MenuModule,
    KanbanCardModule,
    ProjectStateViewRoutingModule,
    ContextModule
  ],
  exports: [ProjectStateViewComponent]
})
export class ProjectStateViewModule { }
