import { Component, OnInit } from '@angular/core';

import { CfdDataGenerator } from './CfdDataGenerator';
import { CumulativeFlowChart } from './CumulativeFlowChart';

@Component({
  selector: 'app-cumulative-flow-chart',
  templateUrl: './cumulative-flow-chart.component.html',
  styleUrls: ['./cumulative-flow-chart.component.less']
})
export class CumulativeFlowChartComponent implements OnInit {
  private readonly dataGenerator = new CfdDataGenerator();
  private readonly d3Chart = new CumulativeFlowChart(this.dataGenerator.stateModel);

  constructor() {
  }

  ngOnInit(): void {
    this.d3Chart.init();
    this.d3Chart.draw(this.dataGenerator.generateData());
  }

  public swap(): void {
    this.d3Chart.draw(this.dataGenerator.generateData());
  }
}
