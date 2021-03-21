import { CfdDataGenerator } from './CfdDataGenerator';
import { KanbanCard, State, StateTransition, StateModel } from 'outstanding-barnacle';


describe('CfdDataGenerator', () => {
    const states: State[] = [new State('backlog', 'backlog'), new State('doing', 'doing'), new State('done', 'done')];
    const stateModel: StateModel = new StateModel('CfdDataGenerator', 'CfdDataGenerator', states, states[0], [states[2]], states[2]);
    stateModel.setSuccessorOf(states[0], states[1]);
    stateModel.setSuccessorOf(states[1], states[2]);

    it('generateData: change of KanbanCard state during the day is added to that day ', () => {
        const testObject = new CfdDataGenerator(states, stateModel);
        const fromDate = new Date(2020, 11, 1);
        const toDate = new Date(2020, 11, 14);
        const transitionDate = new Date(2020, 11, 7, 21, 9, 12);
        const transition = StateTransition.completedState(states[0].id, transitionDate);
        const aKanbanCard = KanbanCard.create('id', 'project').transitToNewState(transition);
        const result = testObject.generateData([aKanbanCard], [fromDate, toDate], true);
        expect(result[0].entries[0].value).toEqual(0);
        expect(result[0].entries[6].value).toEqual(1); // 7.11
        expect(result[0].entries[7].value).toEqual(1); // 8.11
        expect(result[0].entries[13].value).toEqual(1);
        expect(result[0].entries.length).toEqual(14);
    });
});
