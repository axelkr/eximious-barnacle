import { TestBed } from '@angular/core/testing';
import { KanbanCardInFocusPipe } from './kanban-card-in-focus.pipe';
import { MockProjectService } from '../domain-services/project.service.spec';
import { MockStateModelService } from '../domain-services/state-model.service.spec';
import { StateModelService } from '../domain-services/state-model.service';
import { ProjectService } from '../domain-services/project.service';
import { KanbanCard, StateTransition } from 'outstanding-barnacle';

describe('KanbanCardInFocusPipe', () => {
  let pipe: KanbanCardInFocusPipe;
  let mockProjectService: MockProjectService;
  let mockStateModelService: MockStateModelService;

  beforeEach(() => {
    mockProjectService = new MockProjectService();
    mockStateModelService = new MockStateModelService();
    TestBed.configureTestingModule({
      providers: [
        { provide: ProjectService, useValue: mockProjectService },
        { provide: StateModelService, useValue: mockStateModelService }
      ]
    });
    pipe = new KanbanCardInFocusPipe(TestBed.inject(ProjectService), TestBed.inject(StateModelService));
  });


  it('can process empty array', () => {
    expect(pipe.transform([])).toHaveSize(0);
  });

  it('all cards are preserved if no date is given', () => {
    const someKanbanCards: KanbanCard[] = [aCard(), aCard('id2')];
    expect(pipe.transform(someKanbanCards)).toHaveSize(2);
  });

  it('kanban card without transition can be handled', () => {
    const oneKanbanCard: KanbanCard[] = [aCard()];
    expect(pipe.transform(oneKanbanCard)).toHaveSize(1);
  });

  it('kanban card without transition is kept, if first date is given', () => {
    const oneKanbanCard: KanbanCard[] = [aCard()];
    const someDate = new Date();
    expect(pipe.transform(oneKanbanCard, someDate)).toHaveSize(1);
  });

  it('kanban card with transition after date is kept, if first date is given', () => {
    const someDate = new Date(2020, 10, 10);
    const afterSomeDate = new Date(2020, 10, 11);
    const oneKanbanCard: KanbanCard[] = [transitionAt(aCard(), afterSomeDate)];
    expect(pipe.transform(oneKanbanCard, someDate)).toHaveSize(1);
  });

  it('kanban card with transition before date is not kept, if first date is given', () => {
    const someDate = new Date(2020, 10, 10);
    const afterSomeDate = new Date(2020, 10, 11);
    const oneKanbanCard: KanbanCard[] = [transitionAt(aCard(), someDate)];
    expect(pipe.transform(oneKanbanCard, afterSomeDate)).toHaveSize(0);
  });

  it('kanban card with transition at first date is kept', () => {
    const someDate = new Date(2020, 10, 10);
    const oneKanbanCard: KanbanCard[] = [transitionAt(aCard(), someDate)];
    expect(pipe.transform(oneKanbanCard, someDate)).toHaveSize(1);
  });

  it('kanban card with transition at second date is kept', () => {
    const someDate = new Date(2020, 10, 10);
    const afterSomeDate = new Date(2020, 10, 15);
    const afterSomeDateSomeHours = new Date(afterSomeDate.getTime());
    afterSomeDateSomeHours.setHours(12, 45);
    const oneKanbanCard: KanbanCard[] = [transitionAt(aCard(), afterSomeDateSomeHours)];
    expect(pipe.transform(oneKanbanCard, afterSomeDate)).toHaveSize(1);
  });

  it('kanban card from project not in focus is not kept', () => {
    const someDate = new Date(2020, 10, 10);
    const betweenDates = new Date(2020, 10, 12);
    const afterSomeDate = new Date(2020, 10, 15);
    const oneKanbanCard: KanbanCard[] = [transitionAt(aCard(), betweenDates)];
    mockProjectService.returnValueIsInFocus = false;
    expect(pipe.transform(oneKanbanCard, someDate, afterSomeDate)).toHaveSize(0);
  });

  it('kanban card from state not in focus is not kept', () => {
    const someDate = new Date(2020, 10, 10);
    const betweenDates = new Date(2020, 10, 12);
    const afterSomeDate = new Date(2020, 10, 15);
    const oneKanbanCard: KanbanCard[] = [transitionAt(aCard(), betweenDates)];
    mockStateModelService.returnValueIsInFocus = false;
    expect(pipe.transform(oneKanbanCard, someDate, afterSomeDate)).toHaveSize(0);
  });

  it('kanban card from state not kept, if all transitions occurs before first date', () => {
    const beforeSomeDate = new Date(2020, 10, 5);
    const someDate = new Date(2020, 10, 10);
    const afterSomeDate = new Date(2020, 10, 15);
    const oneKanbanCard: KanbanCard[] = [transitionAt(aCard(), beforeSomeDate)];
    expect(pipe.transform(oneKanbanCard, someDate, afterSomeDate)).toHaveSize(0);
  });

  it('kanban card from state not kept, if all transitions occurs after last date', () => {
    const someDate = new Date(2020, 10, 10);
    const betweenDates = new Date(2020, 10, 12);
    const afterSomeDate = new Date(2020, 10, 15);
    const oneKanbanCard: KanbanCard[] = [transitionAt(aCard(), afterSomeDate)];
    expect(pipe.transform(oneKanbanCard, someDate, betweenDates)).toHaveSize(0);
  });

  it('kanban card from state not kept, if all transitions occurs before or after last date', () => {
    const beforeSomeDate = new Date(2020, 10, 5);
    const someDate = new Date(2020, 10, 10);
    const betweenDates = new Date(2020, 10, 12);
    const afterSomeDate = new Date(2020, 10, 15);
    const oneKanbanCard: KanbanCard[] = [aCard()
      .transitToNewState(StateTransition.inProgressInState('state', beforeSomeDate))
      .transitToNewState(StateTransition.inProgressInState('anotherState', afterSomeDate))];
    expect(pipe.transform(oneKanbanCard, someDate, betweenDates)).toHaveSize(0);
  });

  it('kanban card from state kept, if at least transition occurs between first and last date', () => {
    const someDate = new Date(2020, 10, 10);
    const brieflyAfterSomeDate = new Date(2020, 10, 11);
    const betweenDates = new Date(2020, 10, 12);
    const afterSomeDate = new Date(2020, 10, 15);
    const oneKanbanCard: KanbanCard[] = [transitionAt(transitionAt(aCard(), brieflyAfterSomeDate), afterSomeDate, 'anotherState')];
    expect(pipe.transform(oneKanbanCard, someDate, betweenDates)).toHaveSize(1);
  });
});

function aCard(id = 'id'): KanbanCard {
  return KanbanCard.create(id, 'project');
}

function transitionAt(aKanbanCard: KanbanCard, time: Date, state = 'state'): KanbanCard {
  return aKanbanCard.transitToNewState(StateTransition.inProgressInState(state, time));
}