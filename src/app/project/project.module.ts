import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectEditableNameComponent } from './project-editable-name/project-editable-name.component';

@NgModule({
  declarations: [ProjectEditableNameComponent],
  imports: [
    CommonModule
  ],
  exports: [ProjectEditableNameComponent]
})
export class ProjectModule { }
