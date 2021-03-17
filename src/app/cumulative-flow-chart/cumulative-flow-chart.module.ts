import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CumulativeFlowChartComponent } from './cumulative-flow-chart.component';

@NgModule({
  declarations: [CumulativeFlowChartComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CumulativeFlowChartComponent]
})
export class CumulativeFlowChartModule { }
