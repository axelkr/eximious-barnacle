import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStateKanbanCardsComponent } from './project-state-kanban-cards.component';

describe('ProjectStateKanbanCardsComponent', () => {
  let component: ProjectStateKanbanCardsComponent;
  let fixture: ComponentFixture<ProjectStateKanbanCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectStateKanbanCardsComponent ]
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
