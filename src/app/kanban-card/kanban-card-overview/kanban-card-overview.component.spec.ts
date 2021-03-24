import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanCardOverviewComponent } from './kanban-card-overview.component';
import { MockHeijunkaBoardService } from '../../domain-services/heijunka-board.service.spec';
import { HeijunkaBoardService } from '../../domain-services/heijunka-board.service';

describe('KanbanCardOverviewComponent', () => {
  let component: KanbanCardOverviewComponent;
  let fixture: ComponentFixture<KanbanCardOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanbanCardOverviewComponent],
      providers: [
        { provide: HeijunkaBoardService, useClass: MockHeijunkaBoardService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanCardOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
