import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanCardInProgressOverviewComponent } from './kanban-card-in-progress-overview.component';

describe('KanbanCardInProgressOverviewComponent', () => {
  let component: KanbanCardInProgressOverviewComponent;
  let fixture: ComponentFixture<KanbanCardInProgressOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanbanCardInProgressOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanCardInProgressOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
