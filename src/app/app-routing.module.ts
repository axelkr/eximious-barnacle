import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeijunkaBoardViewComponent } from './heijunka-board-view/heijunka-board-view.component';
import { KanbanCardViewComponent } from './kanban-card-view/kanban-card-view.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ProjectStateViewComponent } from './project-state-view/project-state-view.component';

const routes: Routes = [
  { path: '', pathMatch: 'prefix', redirectTo: 'heijunka' },
  { path: 'heijunka', component: HeijunkaBoardViewComponent },
  { path: 'kanbanCard', component: KanbanCardViewComponent },
  { path: 'project', component: ProjectViewComponent },
  { path: 'setup', loadChildren: () => import('./setup-view/setup-view.module').then(m => m.SetupViewModule) },
  { path: 'project-state', component: ProjectStateViewComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
