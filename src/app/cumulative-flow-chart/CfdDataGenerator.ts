import { KanbanCard, State } from 'outstanding-barnacle';

export type TimeSeriesEntry = { date: Date, value: number };
export type TimeSeries = TimeSeriesEntry[];
export type StateTimeSeries = { state: State, entries: TimeSeries };

export class CfdDataGenerator {
    private readonly states: State[];
    private startDate!: Date;
    private endDate!: Date;
    private numberDays!: number;

    constructor(states: State[]) {
        this.states = states;
    }

    public generateData(kanbanCards: KanbanCard[], dateRange: [Date, Date]): StateTimeSeries[] {
        this.startDate = dateRange[0];
        this.endDate = dateRange[1];
        this.numberDays = 1 + this.dayOffset(this.endDate);
        let counterPerDayPerState = this.createZeroKanbanCardsAtEveryDayInEveryState();

        return this.convertToStateTimeSeries(counterPerDayPerState);
    }

    private indexOf(aDate: Date, aState: State): number {
        return this.dayOffset(aDate) + this.numberDays * this.stateOffset(aState);
    }

    private createZeroKanbanCardsAtEveryDayInEveryState(): number[] {
        const numberStates = this.states.length;
        const result = new Array<number>(numberStates * this.numberDays);
        for (var i = 0; i < result.length; i = i + 1) {
            result[i] = 0;
        }
        return result;
    }

    private dayOffset(aDate: Date): number {
        return (aDate.getTime() - this.startDate.getTime()) / (1000 * 60 * 60 * 24);
    }

    private stateOffset(aState: State): number {
        return this.states.indexOf(aState);
    }

    private convertToStateTimeSeries(counterPerDayPerState: number[]): StateTimeSeries[] {
        const result: StateTimeSeries[] = [];
        this.states.forEach(aState => {
            const entries: TimeSeries = [];
            const currentDay = new Date(this.startDate.getTime());
            for (var i = 0; i < this.numberDays; i = i + 1) {
                entries.push({date:new Date(currentDay.getTime()),value: counterPerDayPerState[this.indexOf(currentDay,aState)]});
                currentDay.setDate(currentDay.getDate()+1);
            }
            result.push({ state: aState, entries });
        })
        return result;
    }
}