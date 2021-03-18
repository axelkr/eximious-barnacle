import * as d3 from 'd3';
import { StateModel } from 'outstanding-barnacle';

import { BoxModel } from './BoxModel';
import { TimeSeriesEntry, StateTimeSeries } from './CfdDataGenerator';
import { StackingService } from './StackingService';
import { ColorModel } from './ColorModel';

export class CumulativeFlowChart {
    private readonly chartBox = new BoxModel(260, 200, 10);
    private readonly colorModel = new ColorModel();
    private readonly stateModel: StateModel;
    private svg!: d3.Selection<SVGGElement, unknown, HTMLElement, any>;

    constructor(stateModel: StateModel) {
        this.stateModel = stateModel;
    }

    public init() {
        this.svg = d3.select('#renderCFD').append("svg")
            .attr("width", this.chartBox.width())
            .attr("height", this.chartBox.height())
            .attr("text-anchor", "end")
            .append("g").attr("transform",
                "translate(" + this.chartBox.marginLeft() + "," + this.chartBox.marginTop() + ")");
    }

    public draw(completeData: StateTimeSeries[]): void {
        const stacked = new StackingService().convertToStack(completeData);
        const data = completeData[0].entries;
        const colorOfData = this.colorModel.createColors(this.stateModel).get(completeData[0].state) as string;

        const x = d3.scaleTime<number>()
            .domain(d3.extent(completeData[0].entries, d => d.date) as [Date, Date])
            .range([0, this.chartBox.contentWidth()]);
        const y = d3.scaleLinear()
            .domain([d3.min(stacked[0], a => a[0]), d3.max(stacked[stacked.length - 1], a => a[1])] as [number, number])
            .range([this.chartBox.contentHeight(), 0]);

        this.svg.selectAll("path")
            .data(stacked)
            .join(
                enter => enter.append("path")
                    .attr("fill", colorOfData)
                ,
                update => update,
                exit => exit.remove()
            )
            .attr('d', d3.area()
                .x((d,i) => x(completeData[0].entries[i].date))
                .y0((d) => y(d[0]))
                .y1((d) => y(d[1])));

        const data2 = [
            { month: new Date(2015, 0, 1), apples: 3840, bananas: 1920, cherries: 960, dates: 400 },
            { month: new Date(2015, 1, 1), apples: 1600, bananas: 1440, cherries: 960, dates: 400 },
            { month: new Date(2015, 2, 1), apples: 640, bananas: 960, cherries: 640, dates: 400 },
            { month: new Date(2015, 3, 1), apples: 320, bananas: 480, cherries: 640, dates: 400 }
        ];
        const stack2 = d3.stack()
            .keys(["apples", "bananas", "cherries", "dates"]);

        // @ts-ignore
        const series = stack2(data2);
        console.log(series);
    }
}