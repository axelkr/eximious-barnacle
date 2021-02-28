import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanCardCompleteOverviewComponent } from './kanban-card-complete-overview.component';
import {MockHeijunkaBoardService} from '../heijunka-board.service.spec';
import {HeijunkaBoardService} from '../heijunka-board.service';

describe('KanbanCardCompleteOverviewComponent', () => {
  let component: KanbanCardCompleteOverviewComponent;
  let fixture: ComponentFixture<KanbanCardCompleteOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanbanCardCompleteOverviewComponent ],
      providers: [
        { provide: HeijunkaBoardService, useClass: MockHeijunkaBoardService }
      ]
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
