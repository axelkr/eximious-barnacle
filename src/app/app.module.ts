import { BrowserModule } from '@angular/platform-browser';
import { NgModule , APP_INITIALIZER} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { SetupModule } from './setup/setup.module';
import { ProjectStateDetailsModule } from './project-state-details/project-state-details.module';

import { AppComponent } from './app.component';
import { AppConfig } from './app.config';

import { HeijunkaBoardComponent } from './heijunka-board/heijunka-board.component';
import { ProjectComponent } from './project/project.component';
import { ProjectStateComponent } from './project-state/project-state.component';
import { KanbanCardCreateComponent } from './kanban-card-create/kanban-card-create.component';

const initializeApp= (appConfig: AppConfig) => () => appConfig.load();

@NgModule({
  declarations: [
    AppComponent,
    HeijunkaBoardComponent,
    ProjectComponent,
    ProjectStateComponent,
    KanbanCardCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SetupModule,
    ProjectStateDetailsModule
  ],
  providers: [AppConfig,
    { provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfig], multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
