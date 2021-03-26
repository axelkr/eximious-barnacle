import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContextCreateComponent } from './context-create/context-create.component';
import { ContextSelectComponent } from './context-select/context-select.component';

@NgModule({
  declarations: [ContextCreateComponent, ContextSelectComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [ContextCreateComponent, ContextSelectComponent]
})
export class ContextModule { }
