import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetupViewComponent } from './setup-view.component';

const routes: Routes = [
  {
    path: '',
    component: SetupViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupViewRoutingModule { }
