import { StateTimeSeries } from './CfdDataGenerator';

export class StackingService {
    public convertToStack(completeData: StateTimeSeries[]): [number,number][][] {
        const result: [number,number][][] = [];
        if (completeData.length===0) {
            return result;
        }

        const firstSeries = completeData[0].entries;
        let asStack: [number,number][] = [];
        firstSeries.forEach((anEntry) => {
            if (anEntry.value < 0) {
                asStack.push([anEntry.value, 0]);
            } else {
                asStack.push([0, anEntry.value]);
            }
        });
        result.push(asStack);
        for (let i = 1; i < completeData.length; i = i + 1) {
            asStack = [];
            const nextSeries = completeData[i].entries;
            const lastStack = result[i - 1];
            nextSeries.forEach((anEntry, index) => {
                const lastStackAtEntry = lastStack[index][1];
                if (anEntry.value < 0) {
                    asStack.push([lastStackAtEntry + anEntry.value, lastStackAtEntry]);
                } else {
                    asStack.push([lastStackAtEntry, lastStackAtEntry + anEntry.value]);
                }
            });
            result.push(asStack);
        }

        return result;
    }
}
