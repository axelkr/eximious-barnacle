import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanCardViewComponent } from './kanban-card-view.component';

describe('KanbanCardComponent', () => {
  let component: KanbanCardViewComponent;
  let fixture: ComponentFixture<KanbanCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanbanCardViewComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
