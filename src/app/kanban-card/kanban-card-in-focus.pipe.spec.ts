import { TestBed } from '@angular/core/testing';
import { KanbanCardInFocusPipe } from './kanban-card-in-focus.pipe';
import { MockProjectService } from '../domain-services/project.service.spec';
import { MockStateModelService } from '../domain-services/state-model.service.spec';
import { StateModelService } from '../domain-services/state-model.service';
import { ProjectService } from '../domain-services/project.service';
import { KanbanCard } from 'outstanding-barnacle';

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
    const someKanbanCards: KanbanCard[] = [KanbanCard.create('id', 'project'), KanbanCard.create('id2', 'project')];
    expect(pipe.transform(someKanbanCards)).toHaveSize(2);
  });

  it('kanban card without transition can be handled', () => {
    const oneKanbanCard: KanbanCard[] = [KanbanCard.create('id', 'project')];
    expect(pipe.transform(oneKanbanCard)).toHaveSize(1);
  });

  // test: first date given => card is kept if no transition available or if last transition after first date
  // test: first & last date given => card preserved if at least one transition falls into that period
  // test: border case: transition at first date is preserved
  // test: border case: transition at last date is preserved


});
