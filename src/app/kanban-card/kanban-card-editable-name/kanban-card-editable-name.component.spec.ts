import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanCardEditableNameComponent } from './kanban-card-editable-name.component';
import { MockHeijunkaBoardService } from '../../heijunka-board.service.spec';
import { HeijunkaBoardService } from '../../heijunka-board.service';

describe('KanbanCardEditableNameComponent', () => {
  let component: KanbanCardEditableNameComponent;
  let fixture: ComponentFixture<KanbanCardEditableNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanbanCardEditableNameComponent],
      providers: [
        { provide: HeijunkaBoardService, useClass: MockHeijunkaBoardService }
      ]
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
