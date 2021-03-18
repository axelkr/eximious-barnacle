import * as d3 from 'd3';
import { StateModel } from 'outstanding-barnacle';

import { BoxModel } from './BoxModel';
import { TimeSeriesEntry, TimeSeries, StateTimeSeries } from './CfdDataGenerator';
import { ColorModel } from './ColorModel';

export class CumulativeFlowChart {
    private readonly chartBox = new BoxModel(260, 200, 10);
    private readonly colorModel = new ColorModel();
    private stateModel!: StateModel;

    private svg!: d3.Selection<SVGGElement, unknown, HTMLElement, any>;

    public init(aStateModel: StateModel) {
        this.stateModel = aStateModel;
        this.svg = d3.select('#renderCFD').append("svg")
            .attr("width", this.chartBox.width())
            .attr("height", this.chartBox.height())
            .attr("text-anchor", "end")
            .append("g").attr("transform",
                "translate(" + this.chartBox.marginLeft() + "," + this.chartBox.marginTop() + ")");
    }

    public draw(completeData: StateTimeSeries[]): void {
        const data = completeData[0].entries;
        const colorOfData = this.colorModel.createColors(this.stateModel).get(completeData[0].state) as string;

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
                    .attr("fill", colorOfData)
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