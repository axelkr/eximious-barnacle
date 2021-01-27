import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeijunkaBoardComponent } from './heijunka-board/heijunka-board.component';
import { ProjectComponent } from './project/project.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectStateComponent } from './project-state/project-state.component';
import { ProjectStateDetailsComponent } from './project-state-details/project-state-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeijunkaBoardComponent,
    ProjectComponent,
    ProjectAddComponent,
    ProjectStateComponent,
    ProjectStateDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
