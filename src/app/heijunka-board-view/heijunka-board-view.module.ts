import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { ProjectModule } from '../project/project.module';
import { KanbanCardModule } from '../kanban-card/kanban-card.module';

import { HeijunkaBoardViewComponent } from './heijunka-board-view.component';
import { ProjectComponent } from './project/project.component';
import { ContextSelectComponent } from './context-select/context-select.component';

@NgModule({
  declarations: [HeijunkaBoardViewComponent,
    ProjectComponent, ContextSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    KanbanCardModule,
    ProjectModule,
  ],
  exports: [HeijunkaBoardViewComponent]
})
export class HeijunkaBoardViewModule { }
