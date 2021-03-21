import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeijunkaBoardComponent } from './heijunka-board/heijunka-board.component';
import { KanbanCardViewComponent } from './kanban-card-view/kanban-card-view.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { SetupViewComponent } from './setup-view/setup-view.component';
import { ProjectStateDetailsComponent } from './project-state-details/project-state-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'prefix', redirectTo: 'heijunka' },
  { path: 'heijunka', component: HeijunkaBoardComponent },
  { path: 'kanbanCard', component: KanbanCardViewComponent },
  { path: 'project', component: ProjectViewComponent },
  { path: 'setup', component: SetupViewComponent },
  { path: 'project-state', component: ProjectStateDetailsComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
