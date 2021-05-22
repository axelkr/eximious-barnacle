import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { ProjectModule } from '../project/project.module';
import { KanbanCardModule } from '../kanban-card/kanban-card.module';
import { ContextModule } from '../context/context.module';
import { MenuModule } from '../menu/menu.module';

import { HeijunkaBoardViewComponent } from './heijunka-board-view.component';
import { ProjectComponent } from './project/project.component';
import { HeijunkaBoardViewTitleComponent } from './heijunka-board-view-title/heijunka-board-view-title.component';

@NgModule({
  declarations: [HeijunkaBoardViewComponent,
    ProjectComponent,
    HeijunkaBoardViewTitleComponent,
  ],
  imports: [
    CommonModule, MenuModule,
    FormsModule,
    AppRoutingModule,
    KanbanCardModule,
    ProjectModule,
    ContextModule
  ],
  exports: [HeijunkaBoardViewComponent]
})
export class HeijunkaBoardViewModule { }
