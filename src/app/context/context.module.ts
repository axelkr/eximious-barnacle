import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContextCreateComponent } from './context-create/context-create.component';
import { ContextListComponent } from './context-list/context-list.component';
import { ContextSelectComponent } from './context-select/context-select.component';

@NgModule({
  declarations: [ContextCreateComponent, ContextListComponent, ContextSelectComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [ContextCreateComponent, ContextListComponent, ContextSelectComponent]
})
export class ContextModule { }
