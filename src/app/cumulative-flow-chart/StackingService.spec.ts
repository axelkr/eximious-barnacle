import { StackingService } from './StackingService';
import { State, StateModel } from 'outstanding-barnacle';
import { TimeSeries } from './CfdDataGenerator';


describe('StackingService', () => {
    const states: State[] = [new State('backlog', 'backlog'), new State('doing', 'doing'), new State('done', 'done')];
    const stateModel = new StateModel('StackingServiceTest', 'StackingServiceTest', states, states[0], [states[2]], states[2]);
    stateModel.setSuccessorOf(states[0], states[1]);
    stateModel.setSuccessorOf(states[1], states[2]);

    it('convertToStack: single series with only positive numbers has 0 as lower point', () => {
        const testObject = new StackingService();
        const positiveOnlySeries = generateRandomSeries(new Date(2020, 11, 1), new Date(2020, 11, 7), 5);
        const positiveOnlyStateTimeSeries = [{ state: states[0], entries: positiveOnlySeries }];
        const asStack = testObject.convertToStack(positiveOnlyStateTimeSeries);
        expect(asStack.length).toEqual(1);
        expect(asStack[0].length).toEqual(positiveOnlySeries.length);
        expect(asStack[0][0][0]).toEqual(0);
        expect(asStack[0][0][1]).toEqual(positiveOnlySeries[0].value);
    });

    it('convertToStack: single series with only negative numbers has 0 as upper point', () => {
        const testObject = new StackingService();
        const negativeOnlySeries = generateRandomSeries(new Date(2020, 11, 1), new Date(2020, 11, 7), -5);
        const negativeOnlyStateTimeSeries = [{ state: states[0], entries: negativeOnlySeries }];
        const asStack = testObject.convertToStack(negativeOnlyStateTimeSeries);
        expect(asStack.length).toEqual(1);
        expect(asStack[0].length).toEqual(negativeOnlySeries.length);
        expect(asStack[0][0][0]).toEqual(negativeOnlySeries[0].value);
        expect(asStack[0][0][1]).toEqual(0);
    });

    it('convertToStack: two positive series have their total as upper point', () => {
        const testObject = new StackingService();
        const positiveOnlySeries = generateRandomSeries(new Date(2020, 11, 1), new Date(2020, 11, 7), 5);
        const anotherPositiveOnlySeries = generateRandomSeries(new Date(2020, 11, 1), new Date(2020, 11, 7), 10);
        const bothStateTimeSeries = [{ state: states[0], entries: anotherPositiveOnlySeries },
        { state: states[1], entries: positiveOnlySeries }];
        const asStack = testObject.convertToStack(bothStateTimeSeries);
        expect(asStack.length).toEqual(2);
        expect(asStack[0][0][1]).toEqual(asStack[1][0][0]);
        expect(asStack[1][0][1]).toEqual(5 + 10);
    });

    const generateRandomSeries = (fromDate: Date, toDate: Date, min: number, max: number = min, seed: number = 0) => {
        const currentDate = fromDate;
        const result: TimeSeries = [];
        while (currentDate < toDate) {
            result.push({ date: new Date(currentDate.getTime()), value: min });
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return result;
    };
});



