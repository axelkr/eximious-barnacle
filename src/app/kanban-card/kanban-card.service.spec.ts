import { TestBed } from '@angular/core/testing';

import { KanbanCardService } from './kanban-card.service';

describe('KanbanCardService', () => {
  let service: KanbanCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanbanCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
