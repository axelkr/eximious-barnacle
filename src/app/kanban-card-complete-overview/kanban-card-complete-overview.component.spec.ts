import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanCardCompleteOverviewComponent } from './kanban-card-complete-overview.component';

describe('KanbanCardCompleteOverviewComponent', () => {
  let component: KanbanCardCompleteOverviewComponent;
  let fixture: ComponentFixture<KanbanCardCompleteOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanbanCardCompleteOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanCardCompleteOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
