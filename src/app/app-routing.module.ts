import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeijunkaBoardComponent } from './heijunka-board/heijunka-board.component';
import { TopicComponent } from './topic/topic.component';


const routes: Routes = [
  { path: 'topic', component: TopicComponent },
  { path: 'heijunka', component: HeijunkaBoardComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
