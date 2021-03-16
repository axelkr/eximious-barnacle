import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { ProjectStateDetailsComponent} from './project-state-details.component';
import { KanbanCardCompleteOverviewComponent} from './kanban-card-complete-overview/kanban-card-complete-overview.component';
import { KanbanCardInProgressOverviewComponent} from './kanban-card-in-progress-overview/kanban-card-in-progress-overview.component';
import { ProjectStateKanbanCardsByAgeComponent} from './project-state-kanban-cards-by-age/project-state-kanban-cards-by-age.component';
import { ProjectStateKanbanCardsComponent} from './project-state-kanban-cards/project-state-kanban-cards.component';

@NgModule({
  declarations: [ProjectStateDetailsComponent,KanbanCardCompleteOverviewComponent,KanbanCardInProgressOverviewComponent,
    ProjectStateKanbanCardsByAgeComponent,ProjectStateKanbanCardsComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [ProjectStateDetailsComponent]
})
export class ProjectStateDetailsModule { }
