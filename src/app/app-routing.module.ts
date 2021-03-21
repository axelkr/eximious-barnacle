import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeijunkaBoardViewComponent } from './heijunka-board-view/heijunka-board-view.component';

const routes: Routes = [
  { path: '', pathMatch: 'prefix', redirectTo: 'heijunka' },
  { path: 'heijunka', component: HeijunkaBoardViewComponent },
  { path: 'kanbanCard', loadChildren: () => import('./kanban-card-view/kanban-card-view.module').then(m => m.KanbanCardViewModule) },
  { path: 'project', loadChildren: () => import('./project-view/project-view.module').then(m => m.ProjectViewModule) },
  { path: 'setup', loadChildren: () => import('./setup-view/setup-view.module').then(m => m.SetupViewModule) },
  {
    path: 'project-state',
    loadChildren: () => import('./project-state-view/project-state-view.module').then(m => m.ProjectStateViewModule)
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
