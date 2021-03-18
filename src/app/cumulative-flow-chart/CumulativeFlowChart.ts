import * as d3 from 'd3';
import { StateModel } from 'outstanding-barnacle';

import { BoxModel } from './BoxModel';
import { StateTimeSeries } from './CfdDataGenerator';
import { StackingService } from './StackingService';
import { ColorModel } from './ColorModel';

export class CumulativeFlowChart {
    private readonly chartBox = new BoxModel(240, 100, 5);
    private readonly colorModel = new ColorModel();
    private readonly stateModel: StateModel;
    private svg!: d3.Selection<SVGGElement, unknown, HTMLElement, any>;

    constructor(stateModel: StateModel) {
        this.stateModel = stateModel;
    }

    public init(id: string) {
        this.svg = d3.select('#' + id).append('svg')
            .attr('width', this.chartBox.width())
            .attr('height', this.chartBox.height())
            .attr('text-anchor', 'end')
            .append('g').attr('transform',
                'translate(' + this.chartBox.marginLeft() + ',' + this.chartBox.marginTop() + ')');
    }

    public draw(completeData: StateTimeSeries[]): void {
        if (completeData.length === 0) {
            // clear previous data
            this.svg.selectAll('path')
                .data([])
                .join(
                    enter => enter,
                    update => update,
                    exit => exit.remove()
                );
            return;
        }
        const stacked = new StackingService().convertToStack(completeData);
        const colorOfData = this.colorModel.createColors(this.stateModel);

        const x = d3.scaleTime<number>()
            .domain(d3.extent(completeData[0].entries, d => d.date) as [Date, Date])
            .range([0, this.chartBox.contentWidth()]);
        const y = d3.scaleLinear()
            .domain([d3.min(stacked[0], a => a[0]), d3.max(stacked[stacked.length - 1], a => a[1])] as [number, number])
            .range([this.chartBox.contentHeight(), 0]);

        this.svg.selectAll('path')
            .data(stacked)
            .join(
                enter => enter.append('path')
                    .style('fill', (_, index) => colorOfData.get(completeData[index].state) as string),
                update => update,
                exit => exit.remove()
            )
            .attr('d', d3.area()
                .x((_, i) => x(completeData[0].entries[i].date))
                .y0((d) => y(d[0]))
                .y1((d) => y(d[1])));
    }
}
