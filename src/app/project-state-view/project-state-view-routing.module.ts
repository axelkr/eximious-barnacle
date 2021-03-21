import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectStateViewComponent } from './project-state-view.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectStateViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectStateViewRoutingModule { }
