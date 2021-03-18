import { Component, OnInit } from '@angular/core';

import { CfdDataGenerator } from './CfdDataGenerator';
import { CumulativeFlowChart } from './CumulativeFlowChart';

@Component({
  selector: 'app-cumulative-flow-chart',
  templateUrl: './cumulative-flow-chart.component.html',
  styleUrls: ['./cumulative-flow-chart.component.less']
})
export class CumulativeFlowChartComponent implements OnInit {
  private readonly d3Chart = new CumulativeFlowChart();
  private readonly dataGenerator = new CfdDataGenerator();

  constructor() {
  }

  ngOnInit(): void {
    this.d3Chart.init(this.dataGenerator.stateModel);
    this.d3Chart.draw(this.dataGenerator.generateData());
  }

  public swap(): void {
    this.d3Chart.draw(this.dataGenerator.generateData());
  }
}
