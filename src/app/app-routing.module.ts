import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeijunkaBoardComponent } from './heijunka-board/heijunka-board.component';
import { ProjectStateDetailsComponent } from './project-state-details/project-state-details.component';


const routes: Routes = [
  { path: 'heijunka', component: HeijunkaBoardComponent },
  { path: 'project-state', component: ProjectStateDetailsComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
