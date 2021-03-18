import { CfdDataGenerator } from './CfdDataGenerator';
import { KanbanCard, State, StateTransition } from 'outstanding-barnacle';


describe('CfdDataGenerator', () => {
    const states: State[] = [new State('backlog', 'backlog'), new State('doing', 'doing'), new State('done', 'done')];

    it('generateData: single KanbanCard mid way through is counted as one', () => {
        const testObject = new CfdDataGenerator(states);
        const fromDate = new Date(2020,11,1);
        const toDate = new Date(2020,11,14);
        const transitionDate = new Date(2020,11,7,21,9,12);
        const transition = StateTransition.completedState(states[0].id,transitionDate);
        const aKanbanCard = KanbanCard.create('id','project').transitToNewState(transition);
        const result = testObject.generateData([aKanbanCard],[fromDate,toDate]);
        expect(result[0].entries[0].value).toEqual(0);
        expect(result[0].entries[6].value).toEqual(1);
        expect(result[0].entries[7].value).toEqual(1);
        expect(result[0].entries[13].value).toEqual(1);
        expect(result[0].entries.length).toEqual(14);
    });
});
