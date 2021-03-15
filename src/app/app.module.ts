import { BrowserModule } from '@angular/platform-browser';
import { NgModule , APP_INITIALIZER} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfig } from './app.config';
import { HeijunkaBoardComponent } from './heijunka-board/heijunka-board.component';
import { ProjectComponent } from './project/project.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectStateComponent } from './project-state/project-state.component';
import { ProjectStateDetailsComponent } from './project-state-details/project-state-details.component';
import { KanbanCardCreateComponent } from './kanban-card-create/kanban-card-create.component';
import { KanbanCardInProgressOverviewComponent } from './kanban-card-in-progress-overview/kanban-card-in-progress-overview.component';
import { KanbanCardCompleteOverviewComponent } from './kanban-card-complete-overview/kanban-card-complete-overview.component';
import { HeijunkaDefinitionComponent } from './heijunka-definition/heijunka-definition.component';
import { ProjectStateKanbanCardsComponent } from './project-state-kanban-cards/project-state-kanban-cards.component';
import { ProjectStateKanbanCardsByAgeComponent } from './project-state-kanban-cards-by-age/project-state-kanban-cards-by-age.component';
import { StateModelsComponent } from './state-models/state-models.component';
import { TopicCreateComponent } from './topic-create/topic-create.component';
import { TopicSelectComponent } from './topic-select/topic-select.component';

const initializeApp= (appConfig: AppConfig) => () => appConfig.load();

@NgModule({
  declarations: [
    AppComponent,
    HeijunkaBoardComponent,
    ProjectComponent,
    ProjectAddComponent,
    ProjectStateComponent,
    ProjectStateDetailsComponent,
    KanbanCardCreateComponent,
    KanbanCardInProgressOverviewComponent,
    KanbanCardCompleteOverviewComponent,
    HeijunkaDefinitionComponent,
    ProjectStateKanbanCardsComponent,
    ProjectStateKanbanCardsByAgeComponent,
    StateModelsComponent,
    TopicCreateComponent,
    TopicSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppConfig,
    { provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfig], multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
