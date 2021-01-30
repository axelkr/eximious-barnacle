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

export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}

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
    KanbanCardCompleteOverviewComponent
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
