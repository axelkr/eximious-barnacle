import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

interface TimeSeriesEntry { date: Date, value: number };

@Component({
  selector: 'app-cumulative-flow-chart',
  templateUrl: './cumulative-flow-chart.component.html',
  styleUrls: ['./cumulative-flow-chart.component.less']
})
export class CumulativeFlowChartComponent implements OnInit {
  private readonly margin = { top: 10, right: 10, bottom: 10, left: 10 };
  private readonly width = 260 - this.margin.left - this.margin.right;
  private readonly height = 200 - this.margin.top - this.margin.bottom;

  private data: TimeSeriesEntry[];
  private readonly data1 = [{ date: new Date(2020, 11, 1), value: 4 }, { date: new Date(2020, 11, 2), value: 8 }, { date: new Date(2020, 11, 3), value: 15 },
  { date: new Date(2020, 11, 4), value: 16 }, { date: new Date(2020, 11, 5), value: 23 }, { date: new Date(2020, 11, 6), value: 24 }];
  private readonly data2 = [{ date: new Date(2020, 11, 1), value: 6 }, { date: new Date(2020, 11, 2), value: 10 }, { date: new Date(2020, 11, 3), value: 12 },
  { date: new Date(2020, 11, 4), value: 17 }, { date: new Date(2020, 11, 5), value: 10 }, { date: new Date(2020, 11, 6), value: 32 }];
  private svg!: d3.Selection<SVGGElement, unknown, HTMLElement, any>;

  constructor() {
    this.data = this.data1;
  }

  ngOnInit(): void {
    this.initChart();
    this.draw();
  }

  private initChart() {
    this.svg = d3.select('#renderCFD').append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .attr("text-anchor", "end")
      .append("g").attr("transform",
        "translate(" + this.margin.left + "," + this.margin.top + ")");
  }

  public swap(): void {
    if (this.data === this.data1) {
      this.data = this.data2;
    } else {
      this.data = this.data1;
    }
    this.draw();
  }

  private draw(): void {
    const x = d3.scaleTime<number>()
      .domain(d3.extent(this.data, d => d.date) as [Date, Date])
      .range([0, this.width]);
    const y = d3.scaleLinear()
      .domain(d3.extent(this.data, d => d.value) as [number, number])
      .range([this.height, 0]);

    this.svg.selectAll("path")
      .data([this.data])
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
