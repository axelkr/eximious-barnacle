import { CumulativeFlowChart } from './CumulativeFlowChart';
import { State, StateModel } from 'outstanding-barnacle';
import { TimeSeriesEntry, TimeSeries, StateTimeSeries } from './CfdDataGenerator';

/*
export type TimeSeriesEntry = { date: Date, value: number };
export type TimeSeries = TimeSeriesEntry[];
export type StateTimeSeries = { state: State, entries: TimeSeries };
*/

describe('CumulativeFlowChart', () => {
    const states: State[] = [new State('backlog', 'backlog'), new State('doing', 'doing'), new State('done', 'done')];
    const stateModel = new StateModel('CumulativeFlowChartTest', 'CumulativeFlowChartTest', states, states[0], [states[2]], states[2]);
    stateModel.setSuccessorOf(states[0], states[1]);
    stateModel.setSuccessorOf(states[1], states[2]);

    it('convertToStack: single series with only positive numbers has 0 as lower point', () => {
        const testObject = new CumulativeFlowChart(stateModel);
        const positiveOnlySeries = generateRandomSeries(new Date(2020, 11, 1), new Date(2020, 11, 7), 5);
        const positiveOnlyStateTimeSeries = [{ state: states[0], entries: positiveOnlySeries }];
        const asStack = testObject.convertToStack(positiveOnlyStateTimeSeries);
        expect(asStack.length).toEqual(1);
        expect(asStack[0].length).toEqual(positiveOnlySeries.length);
        expect(asStack[0][0][0]).toEqual(0);
        expect(asStack[0][0][1]).toEqual(positiveOnlySeries[0].value);
    });

    it('convertToStack: single series with only negative numbers has 0 as upper point', () => {
        const testObject = new CumulativeFlowChart(stateModel);
        const negativeOnlySeries = generateRandomSeries(new Date(2020, 11, 1), new Date(2020, 11, 7), -5);
        const negativeOnlyStateTimeSeries = [{ state: states[0], entries: negativeOnlySeries }];
        const asStack = testObject.convertToStack(negativeOnlyStateTimeSeries);
        expect(asStack.length).toEqual(1);
        expect(asStack[0].length).toEqual(negativeOnlySeries.length);
        expect(asStack[0][0][0]).toEqual(negativeOnlySeries[0].value);
        expect(asStack[0][0][1]).toEqual(0);
    });

    function generateRandomSeries(fromDate: Date, toDate: Date, min: number, max: number = min, seed: number = 0): TimeSeries {
        const currentDate = fromDate;
        const result: TimeSeries = [];
        while (currentDate < toDate) {
            result.push({date:new Date(currentDate.getTime()), value:min});
            currentDate.setDate(currentDate.getDate()+1);
        }
        return result;
    }
});
