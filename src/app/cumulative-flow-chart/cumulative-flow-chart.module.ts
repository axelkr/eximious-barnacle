import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

import { StateModelModule } from '../state-model/state-model.module';

import { CumulativeFlowChartComponent } from './cumulative-flow-chart.component';

@NgModule({
  declarations: [CumulativeFlowChartComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    StateModelModule
  ],
  exports: [CumulativeFlowChartComponent]
})
export class CumulativeFlowChartModule { }
