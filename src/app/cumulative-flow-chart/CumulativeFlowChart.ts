/* eslint-disable max-len */
import * as d3 from 'd3';
import { State, StateModel } from 'outstanding-barnacle';

import { BoxModel } from './BoxModel';
import { StateTimeSeries } from './CfdDataGenerator';
import { StackingService } from './StackingService';
import { ColorModel } from './ColorModel';

export class CumulativeFlowChart {
    private readonly chartBox = new BoxModel(200 * 1.618, 200, 30, 20);
    private readonly colorsPerState: Map<State, string>;
    private svg!: d3.Selection<SVGGElement, unknown, HTMLElement, any>;
    private xAxis!: d3.Selection<SVGGElement, unknown, HTMLElement, any>;
    private yAxis!: d3.Selection<SVGGElement, unknown, HTMLElement, any>;

    constructor(stateModel: StateModel) {
        this.colorsPerState = new ColorModel().createColors(stateModel);
    }

    public init(id: string) {
        const svgNode = d3.select('#' + id)
            .append('svg')
            .attr('width', this.chartBox.width())
            .attr('height', this.chartBox.height())
            .attr('text-anchor', 'end');

        this.svg = svgNode.append('g').attr('transform', 'translate(' + this.chartBox.marginLeft() + ',' + this.chartBox.marginTop() + ')');

        this.yAxis = svgNode.append('g').attr('transform', 'translate(' + (this.chartBox.contentWidth() + this.chartBox.marginLeft()) + ',' + this.chartBox.marginTop() + ')');
        this.xAxis = svgNode.append('g').attr('transform', 'translate(' + this.chartBox.marginLeft() + ',' + (this.chartBox.contentHeight() + this.chartBox.marginTop()) + ')');
    }

    public draw(completeData: StateTimeSeries[]): void {
        // clear previous data
        this.svg.selectAll('path')
            .data([])
            .join(
                enter => enter,
                update => update,
                exit => exit.remove()
            );

        if (completeData.length === 0) {
            return;
        }

        const stacked = new StackingService().convertToStack(completeData);

        const x = d3.scaleTime<number>()
            .domain(d3.extent(completeData[0].entries, d => d.date) as [Date, Date])
            .range([0, this.chartBox.contentWidth()]);
        const y = d3.scaleLinear()
            .domain([d3.min(stacked[0], a => a[0]), d3.max(stacked[stacked.length - 1], a => a[1])] as [number, number])
            .range([this.chartBox.contentHeight(), 0]);

        const maxYValue: number = d3.max(stacked[stacked.length - 1], a => a[1]) as number;
        const minDate: Date = completeData[0].entries[0].date;
        const maxDate: Date = completeData[0].entries[completeData[0].entries.length - 1].date;
        this.xAxis.call(d3.axisBottom(x).tickValues([minDate, maxDate]).tickFormat(aDate => (aDate as Date).toLocaleDateString()));
        this.yAxis.call(d3.axisRight(y).tickValues([maxYValue]).tickFormat(numberKanbanCards => numberKanbanCards.toString()));

        this.svg.selectAll('path')
            .data(stacked)
            .join(
                enter => enter.append('path')
                    .style('fill', (_, index) => this.colorsPerState.get(completeData[index].state) as string),
                update => update,
                exit => exit.remove()
            )
            .attr('d', d3.area()
                .x((_, i) => x(completeData[0].entries[i].date))
                .y0((d) => y(d[0]))
                .y1((d) => y(d[1])));
    }
}
