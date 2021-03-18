import { KanbanCard, State } from 'outstanding-barnacle';

export type TimeSeriesEntry = { date: Date, value: number };
export type TimeSeries = TimeSeriesEntry[];
export type StateTimeSeries = { state: State, entries: TimeSeries };

export class CfdDataGenerator {
    private readonly states: State[];

    constructor(states: State[]) {
        this.states = states;
    }

    public generateData(kanbanCards: KanbanCard[], dateRange: [Date,Date]): StateTimeSeries[] {
        const result: StateTimeSeries[] = [];
        
        return result;
    }
}