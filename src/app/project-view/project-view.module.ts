import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectViewComponent } from './project-view.component';
import { ProjectModule } from '../project/project.module';
import { ProjectViewRoutingModule } from './project-view-routing.module';


@NgModule({
  declarations: [ProjectViewComponent],
  imports: [
    CommonModule,
    ProjectModule,
    ProjectViewRoutingModule
  ]
})
export class ProjectViewModule { }
