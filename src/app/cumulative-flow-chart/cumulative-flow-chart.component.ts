import { AfterViewInit, Component, Input } from '@angular/core';
import { Project } from 'outstanding-barnacle';

import { CfdDataGenerator } from './CfdDataGenerator';
import { CumulativeFlowChart } from './CumulativeFlowChart';

@Component({
  selector: 'app-cumulative-flow-chart',
  templateUrl: './cumulative-flow-chart.component.html',
  styleUrls: ['./cumulative-flow-chart.component.less']
})
export class CumulativeFlowChartComponent implements AfterViewInit {
  @Input() chartId: string | undefined;
  @Input() project: Project | undefined;

  private readonly dataGenerator = new CfdDataGenerator();
  private readonly d3Chart = new CumulativeFlowChart(this.dataGenerator.stateModel);

  constructor() {
  }

  ngAfterViewInit(): void {
    if (this.chartId === undefined) {
      return;
    }
    this.d3Chart.init(this.chartId);
    this.redraw();
  }

  public swap(): void {
    this.redraw();
  }

  private redraw(): void {
    this.d3Chart.draw(this.dataGenerator.generateData());
  }
}
