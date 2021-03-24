import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStateKanbanCardsComponent } from './project-state-kanban-cards.component';
import { MockHeijunkaBoardService } from '../../domain-services/heijunka-board.service.spec';
import { HeijunkaBoardService } from '../../domain-services/heijunka-board.service';

describe('ProjectStateKanbanCardsComponent', () => {
  let component: ProjectStateKanbanCardsComponent;
  let fixture: ComponentFixture<ProjectStateKanbanCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectStateKanbanCardsComponent],
      providers: [
        { provide: HeijunkaBoardService, useClass: MockHeijunkaBoardService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStateKanbanCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
