import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

import { BoxModel } from './BoxModel';
import { CfdDataGenerator,TimeSeriesEntry,TimeSeries,StateTimeSeries } from './CfdDataGenerator';

@Component({
  selector: 'app-cumulative-flow-chart',
  templateUrl: './cumulative-flow-chart.component.html',
  styleUrls: ['./cumulative-flow-chart.component.less']
})
export class CumulativeFlowChartComponent implements OnInit {
  private readonly chartBox = new BoxModel(260, 200, 10);
  private readonly dataGenerator = new CfdDataGenerator();

  private svg!: d3.Selection<SVGGElement, unknown, HTMLElement, any>;

  constructor() {
  }

  ngOnInit(): void {
    this.initChart();
    this.draw(this.dataGenerator.generateData());
  }

  private initChart() {
    this.svg = d3.select('#renderCFD').append("svg")
      .attr("width", this.chartBox.width())
      .attr("height", this.chartBox.height())
      .attr("text-anchor", "end")
      .append("g").attr("transform",
        "translate(" + this.chartBox.marginLeft() + "," + this.chartBox.marginTop() + ")");
  }

  public swap(): void {
    this.draw(this.dataGenerator.generateData());
  }

  private draw(completeData:StateTimeSeries[]): void {
    const data = completeData[0].entries;
    const x = d3.scaleTime<number>()
      .domain(d3.extent(data, d => d.date) as [Date, Date])
      .range([0, this.chartBox.contentWidth()]);
    const y = d3.scaleLinear()
      .domain(d3.extent(data, d => d.value) as [number, number])
      .range([this.chartBox.contentHeight(), 0]);

    this.svg.selectAll("path")
      .data([data])
      .join(
        enter => enter.append("path")
          .attr("fill", "#cce5df")
        ,
        update => update,
        exit => exit.remove()
      )
      .attr('d', d3.area<TimeSeriesEntry>()
        .x((d) => x(d.date))
        .y0(y(0))
        .y1((d) => y(d.value)))
  }
}
