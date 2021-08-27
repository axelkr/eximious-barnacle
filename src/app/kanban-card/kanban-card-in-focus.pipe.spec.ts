import { TestBed } from '@angular/core/testing';
import { KanbanCardInFocusPipe } from './kanban-card-in-focus.pipe';
import { MockProjectService } from '../domain-services/project.service.spec';
import { MockStateModelService } from '../domain-services/state-model.service.spec';
import { StateModelService } from '../domain-services/state-model.service';
import { ProjectService } from '../domain-services/project.service';

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
    pipe = TestBed.inject(KanbanCardInFocusPipe);
  });


  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  // test: no date given => all cards preserved
  // test: first date given => last transition before that is discarded
  // test: first & last date given => card preserved if at least one transition falls into that period
  // test: border case: transition at first date is preserved
  // test: border case: transition at last date is preserved


});
