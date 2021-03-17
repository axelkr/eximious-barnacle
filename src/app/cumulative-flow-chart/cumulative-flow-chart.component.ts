import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as d3Array from 'd3-array';

@Component({
  selector: 'app-cumulative-flow-chart',
  templateUrl: './cumulative-flow-chart.component.html',
  styleUrls: ['./cumulative-flow-chart.component.less']
})
export class CumulativeFlowChartComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.initChart();
  }

  private initChart() {
    this.draw();
  }

  public draw(): void {
    const data = [4, 8, 15, 16, 23, 42];
    const maxData = d3Array.max(data);
    if (maxData === undefined ) {
      throw new Error('undefined');
    }
    const width = 420;
    const x = d3.scaleLinear()
    .domain([0, maxData])
    .range([0, width]);

    const y = d3.scaleBand()
    .domain(d3.range(data.length).map(aNumber=> ''+aNumber))
    .range([0, 20 * data.length]);

    {
      const svg = d3.select('#renderCFD').append("svg")
          .attr("width", width)
          .attr("height", y.range()[1])
          .attr("font-family", "sans-serif")
          .attr("font-size", "10")
          .attr("text-anchor", "end");
    
      const bar = svg.selectAll("g")
        .data(data)
        .join("g")
          .attr("transform", (d, i) => `translate(0,${y(''+i)})`);
    
      bar.append("rect")
          .attr("fill", "steelblue")
          .attr("width", x)
          .attr("height", y.bandwidth() - 1);
    
      bar.append("text")
          .attr("fill", "white")
          .attr("x", d => x(d) - 3)
          .attr("y", (y.bandwidth() - 1) / 2)
          .attr("dy", "0.35em")
          .text(d => d);
    
      //return svg.node();
    }
  }
}
