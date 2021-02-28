import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanCardCreateComponent } from './kanban-card-create.component';
import { MockHeijunkaBoardService } from '../heijunka-board.service.spec';
import { HeijunkaBoardService } from '../heijunka-board.service';

describe('KanbanCardCreateComponent', () => {
  let component: KanbanCardCreateComponent;
  let fixture: ComponentFixture<KanbanCardCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanbanCardCreateComponent],
      providers: [
        { provide: HeijunkaBoardService, useClass: MockHeijunkaBoardService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanCardCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
