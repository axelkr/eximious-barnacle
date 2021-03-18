import { KanbanCard, State } from 'outstanding-barnacle';

export type TimeSeriesEntry = { date: Date, value: number };
export type TimeSeries = TimeSeriesEntry[];
export type StateTimeSeries = { state: State, entries: TimeSeries };

export class CfdDataGenerator {
    private readonly states: State[];
    private readonly data1: Map<State, TimeSeries>;
    private readonly data2: Map<State, TimeSeries>;
    private return1NextTime = true;

    constructor(states: State[]) {
        this.states = states;

        const series1: TimeSeries = [{ date: new Date(2020, 11, 1), value: 4 }, { date: new Date(2020, 11, 2), value: 8 }, { date: new Date(2020, 11, 3), value: 15 },
        { date: new Date(2020, 11, 4), value: 16 }, { date: new Date(2020, 11, 5), value: 23 }, { date: new Date(2020, 11, 6), value: 24 }];
        const series2: TimeSeries = [{ date: new Date(2020, 11, 1), value: 20 }, { date: new Date(2020, 11, 2), value: 10 }, { date: new Date(2020, 11, 3), value: 12 },
        { date: new Date(2020, 11, 4), value: 17 }, { date: new Date(2020, 11, 5), value: 10 }, { date: new Date(2020, 11, 6), value: 8 }];
        const series3: TimeSeries = [{ date: new Date(2020, 11, 1), value: 10 }, { date: new Date(2020, 11, 2), value: 10 }, { date: new Date(2020, 11, 3), value: 3 },
        { date: new Date(2020, 11, 4), value: 9 }, { date: new Date(2020, 11, 5), value: 16 }, { date: new Date(2020, 11, 6), value: 12 }];

        this.data1 = new Map<State, TimeSeries>()
            .set(this.states[0], series1)
            .set(this.states[1], series2)
            .set(this.states[2], series3);
        this.data2 = new Map<State, TimeSeries>()
            .set(this.states[0], series2)
            .set(this.states[1], series1)
            .set(this.states[2], series2);
    }

    public generateData(kanbanCards: KanbanCard[], dateRange: [Date,Date]): StateTimeSeries[] {
        const result: StateTimeSeries[] = [];
        const toReturn = this.return1NextTime ? this.data1 : this.data2;
        this.return1NextTime = !this.return1NextTime;

        this.states.forEach((aState: State) => {
            if (toReturn.has(aState)) {
                const dataOfState = toReturn.get(aState) as TimeSeries;
                result.push({ state: aState, entries: dataOfState });
            }
        });

        return result;
    }
}