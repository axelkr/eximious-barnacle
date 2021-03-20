import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { CumulativeFlowChartModule } from './cumulative-flow-chart/cumulative-flow-chart.module';
import { SetupModule } from './setup/setup.module';
import { ProjectStateDetailsModule } from './project-state-details/project-state-details.module';
import { HeijunkaBoardModule } from './heijunka-board/heijunka-board.module';
import { KanbanCardModule } from './kanban-card/kanban-card.module';
import { ProjectModule } from './project/project.module';

import { AppComponent } from './app.component';
import { AppConfig } from './app.config';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const initializeApp = (appConfig: AppConfig) => () => appConfig.load();

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SetupModule,
    ProjectStateDetailsModule,
    HeijunkaBoardModule,
    CumulativeFlowChartModule,
    KanbanCardModule, ProjectModule,
    NoopAnimationsModule
  ],
  providers: [AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfig], multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
