import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { HeijunkaBoardComponent } from './heijunka-board.component';
import { ProjectComponent } from './project/project.component';
import { ProjectStateComponent } from './project-state/project-state.component';
import { KanbanCardCreateComponent } from './kanban-card-create/kanban-card-create.component';

@NgModule({
  declarations: [HeijunkaBoardComponent,
    ProjectComponent,
    ProjectStateComponent,
    KanbanCardCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [HeijunkaBoardComponent]
})
export class HeijunkaBoardModule { }
