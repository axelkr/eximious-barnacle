import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as d3Array from 'd3-array';

@Component({
  selector: 'app-cumulative-flow-chart',
  templateUrl: './cumulative-flow-chart.component.html',
  styleUrls: ['./cumulative-flow-chart.component.less']
})
export class CumulativeFlowChartComponent implements OnInit {
  private data: number[];
  private readonly data1 = [4, 8, 15, 16, 23, 42];
  private readonly data2 = [6, 10, 12, 17, 10, 32];
  private svg!: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>;

  constructor() {
    this.data = this.data1;
  }

  ngOnInit(): void {
    this.initChart();
    this.draw();
  }

  private initChart() {
    const width = 300;
    this.svg = d3.select('#renderCFD').append("svg")
      .attr("width", width)
      .attr("height", 20 * this.data.length)
      .attr("font-family", "sans-serif")
      .attr("font-size", "10")
      .attr("text-anchor", "end");
  }

  public swap(): void {
    if (this.data === this.data1) {
      this.data = this.data2;
    } else {
      this.data = this.data1;
    }
    this.draw();
  }

  public draw(): void {
    const width = 300;
    const x = d3.scaleLinear()
      .domain([0, 50])
      .range([0, width]);
    const y = d3.scaleBand()
      .domain(d3.range(this.data.length).map(aNumber => '' + aNumber))
      .range([0, 20 * this.data.length]);
    this.svg.selectAll("rect")
      .data(this.data,(d,i)=>''+i)
      .join(
        enter => enter.append("rect")
          .attr("fill", "steelblue")
          .attr("width", x)
          .attr("height", y.bandwidth() - 1)
          .attr("transform", (d, i) => `translate(0,${y('' + i)})`),
        update => update
          .attr("width", x),
        exit => exit.remove()
      )
  }
}
