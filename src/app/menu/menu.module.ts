import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavigateToBoardComponent } from './navigate-to-board/navigate-to-board.component';

@NgModule({
  declarations: [
    NavigateToBoardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavigateToBoardComponent]
})
export class MenuModule { }
