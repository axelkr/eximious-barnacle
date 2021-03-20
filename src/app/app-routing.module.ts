import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeijunkaBoardComponent } from './heijunka-board/heijunka-board.component';
import { KanbanCardComponent } from './kanban-card/kanban-card.component';
import { HeijunkaDefinitionComponent } from './setup/heijunka-definition/heijunka-definition.component';
import { ProjectStateDetailsComponent } from './project-state-details/project-state-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'prefix', redirectTo: 'heijunka' },
  { path: 'heijunka', component: HeijunkaBoardComponent },
  { path: 'kanbanCard', component: KanbanCardComponent },
  { path: 'heijunka-setup', component: HeijunkaDefinitionComponent },
  { path: 'project-state', component: ProjectStateDetailsComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
