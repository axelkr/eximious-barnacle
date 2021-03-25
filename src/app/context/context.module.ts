import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContextCreateComponent } from './context-create/context-create.component';
import { ContextListComponent } from './context-list/context-list.component';

@NgModule({
  declarations: [ContextCreateComponent, ContextListComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [ContextCreateComponent, ContextListComponent]
})
export class ContextModule { }
