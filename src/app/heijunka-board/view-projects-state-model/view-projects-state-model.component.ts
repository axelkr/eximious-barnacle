/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable one-var */
import { Component, Input, AfterViewInit } from '@angular/core';
import * as d3 from 'd3-selection';
import * as d3Fetch from 'd3-fetch';
import * as d3Force from 'd3-force';

import { Project } from 'outstanding-barnacle';

@Component({
  selector: 'app-view-projects-state-model',
  templateUrl: './view-projects-state-model.component.html',
  styleUrls: ['./view-projects-state-model.component.less']
})
export class ViewProjectsStateModelComponent implements AfterViewInit {
  @Input() project: Project | undefined;

  constructor() { }

  ngAfterViewInit(): void {
    this.draw();
  }

  public draw(): void {
    if (this.project === undefined) {
      return;
    }
    const selector = '#renderProject'+this.project.id;
    // set the dimensions and margins of the graph
    const margin = { top: 10, right: 10, bottom: 10, left: 10 },
      width = 200 - margin.left - margin.right,
      height = 200 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3.select(selector)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform',
        'translate(' + margin.left + ',' + margin.top + ')');

    d3Fetch.json('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_network.json').then((data: any) => {

      // Initialize the links
      const link = svg
        .selectAll('line')
        .data(data.links)
        .enter()
        .append('line')
        .style('stroke', '#aaa');

      // Initialize the nodes
      const node = svg
        .selectAll('circle')
        .data(data.nodes)
        .enter()
        .append('circle')
        .attr('r', 20)
        .style('fill', '#69b3a2');

      // This function is run at each iteration of the force algorithm, updating the nodes position.
      const ticked = () => {
        link
          .attr('x1', function(d: any) { return d.source.x; })
          .attr('y1', function(d: any) { return d.source.y; })
          .attr('x2', function(d: any) { return d.target.x; })
          .attr('y2', function(d: any) { return d.target.y; });

        node
          .attr('cx', function(d: any) { return d.x + 6; })
          .attr('cy', function(d: any) { return d.y - 6; });
      };

      // Let's list the force we wanna apply on the network
      const simulation = d3Force.forceSimulation(data.nodes)                 // Force algorithm is applied to data.nodes
        .force('link', d3Force.forceLink()                               // This force provides links between nodes
          //.id((d) => d.id)                     // This provide  the id of a node
          .links(data.links)                                    // and this the list of links
        )
        .force('charge', d3Force.forceManyBody().strength(-400)) //This adds repulsion between nodes. Change -400 for the repulsion strength
        .force('center', d3Force.forceCenter(width / 2, height / 2))     // This force attracts nodes to the center of the svg area
        .on('end', ticked);
    });
  };
}
