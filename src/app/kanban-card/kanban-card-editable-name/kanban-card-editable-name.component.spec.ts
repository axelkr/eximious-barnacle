import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanCardEditableNameComponent } from './kanban-card-editable-name.component';

describe('KanbanCardEditableNameComponent', () => {
  let component: KanbanCardEditableNameComponent;
  let fixture: ComponentFixture<KanbanCardEditableNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanbanCardEditableNameComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanCardEditableNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
