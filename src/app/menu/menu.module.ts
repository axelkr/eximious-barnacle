import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavigateToBoardComponent } from './navigate-to-board/navigate-to-board.component';
import { NavigateToSetupComponent } from './navigate-to-setup/navigate-to-setup.component';

@NgModule({
  declarations: [
    NavigateToBoardComponent,
    NavigateToSetupComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavigateToBoardComponent, NavigateToSetupComponent]
})
export class MenuModule { }
