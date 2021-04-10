import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextSelectComponent } from './context-select/context-select.component';

@NgModule({
  declarations: [ContextSelectComponent],
  imports: [
    CommonModule
  ],
  exports: [ContextSelectComponent]
})
export class ContextModule { }
