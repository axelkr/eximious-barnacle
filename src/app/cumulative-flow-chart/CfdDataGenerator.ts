import { KanbanCard, State } from 'outstanding-barnacle';

export type TimeSeriesEntry = { date: Date; value: number };
export type TimeSeries = TimeSeriesEntry[];
export type StateTimeSeries = { state: State; entries: TimeSeries };

export class CfdDataGenerator {
    private readonly states: State[];
    private readonly statesInFocus: State[];
    private startDay!: Date;
    private endDay!: Date;
    private numberDays!: number;

    constructor(states: State[], statesInFocus: State[]) {
        this.states = states;
        this.statesInFocus = statesInFocus;
    }

    public generateData(kanbanCards: KanbanCard[], dateRange: [Date, Date]): StateTimeSeries[] {
        this.startDay = this.setTimeToEndOfDay(dateRange[0]);
        this.endDay = this.setTimeToEndOfDay(dateRange[1]);
        this.numberDays = 1 + this.dayOffset(this.endDay);
        let counterPerDayPerState = this.createZeroKanbanCardsAtEveryDayInEveryState();

        kanbanCards.forEach(aKanbanCard => {
            counterPerDayPerState = this.countKanbanCard(aKanbanCard, counterPerDayPerState);
        });

        return this.convertToStateTimeSeries(counterPerDayPerState);
    }

    private setTimeToEndOfDay(aDate: Date): Date {
        const updatedDate = new Date(aDate.getTime());
        updatedDate.setHours(23);
        updatedDate.setMinutes(59);
        updatedDate.setSeconds(59);
        return updatedDate;
    }

    private countKanbanCard(kanbanCard: KanbanCard, counterPerDayPerState: number[]): number[] {
        const currentDay = new Date(this.startDay.getTime());
        for (let i = 0; i < this.numberDays; i = i + 1) {
            const transitionAtDay = kanbanCard.history.atDate(currentDay);
            if (transitionAtDay === undefined) {
                currentDay.setDate(currentDay.getDate() + 1);
                continue;
            }
            const indexState = this.states.findIndex(x => x.id === transitionAtDay.state);
            if (indexState >= 0) {
                const indexCounter = this.indexOf(currentDay, this.states[indexState]);
                counterPerDayPerState[indexCounter] = counterPerDayPerState[indexCounter] + 1;
            }
            currentDay.setDate(currentDay.getDate() + 1);
        }
        return counterPerDayPerState;
    }

    private indexOf(aDate: Date, aState: State): number {
        return this.dayOffset(aDate) + this.numberDays * this.stateOffset(aState);
    }

    private createZeroKanbanCardsAtEveryDayInEveryState(): number[] {
        const numberStates = this.states.length;
        const result = new Array<number>(numberStates * this.numberDays);
        for (let i = 0; i < result.length; i = i + 1) {
            result[i] = 0;
        }
        return result;
    }

    private dayOffset(aDate: Date): number {
        return Math.round((aDate.getTime() - this.startDay.getTime()) / (1000 * 60 * 60 * 24));
    }

    private stateOffset(aState: State): number {
        return this.states.indexOf(aState);
    }

    private convertToStateTimeSeries(counterPerDayPerState: number[]): StateTimeSeries[] {
        const result: StateTimeSeries[] = [];
        this.states.forEach(aState => {
            const isInFocus = this.statesInFocus.findIndex(a => a.id === aState.id) !== -1;
            if (!isInFocus) {
                return;
            }
            const entries: TimeSeries = [];
            const currentDay = new Date(this.startDay.getTime());
            for (let i = 0; i < this.numberDays; i = i + 1) {
                entries.push({ date: new Date(currentDay.getTime()), value: counterPerDayPerState[this.indexOf(currentDay, aState)] });
                currentDay.setDate(currentDay.getDate() + 1);
            }
            result.push({ state: aState, entries });
        });
        return result;
    }
}
