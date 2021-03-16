import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanCardInProgressOverviewComponent } from './kanban-card-in-progress-overview.component';
import {MockHeijunkaBoardService} from '../../heijunka-board.service.spec';
import {HeijunkaBoardService} from '../../heijunka-board.service';

describe('KanbanCardInProgressOverviewComponent', () => {
  let component: KanbanCardInProgressOverviewComponent;
  let fixture: ComponentFixture<KanbanCardInProgressOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanbanCardInProgressOverviewComponent ],
      providers: [
        { provide: HeijunkaBoardService, useClass: MockHeijunkaBoardService }
      ]
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
