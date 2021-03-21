import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanCardViewComponent } from './kanban-card-view.component';

const routes: Routes = [
  {
    path: '',
    component: KanbanCardViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KanbanCardViewRoutingModule { }
