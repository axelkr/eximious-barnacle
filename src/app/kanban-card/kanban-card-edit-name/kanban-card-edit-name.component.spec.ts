import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanCardEditNameComponent } from './kanban-card-edit-name.component';

describe('KanbanCardEditNameComponent', () => {
  let component: KanbanCardEditNameComponent;
  let fixture: ComponentFixture<KanbanCardEditNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanbanCardEditNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanCardEditNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
