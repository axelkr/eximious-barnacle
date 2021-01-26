import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TopicComponent } from './topic/topic.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { StateSelectionComponent } from './state-selection/state-selection.component';
import { HeijunkaBoardComponent } from './heijunka-board/heijunka-board.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TopicComponent,
    TaskAddComponent,
    StateSelectionComponent,
    HeijunkaBoardComponent
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
