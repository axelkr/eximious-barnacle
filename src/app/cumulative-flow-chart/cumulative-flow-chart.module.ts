import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CumulativeFlowChartComponent } from './cumulative-flow-chart.component';

@NgModule({
  declarations: [CumulativeFlowChartComponent],
  imports: [
    CommonModule
  ],
  exports: [CumulativeFlowChartComponent]
})
export class CumulativeFlowChartModule { }
