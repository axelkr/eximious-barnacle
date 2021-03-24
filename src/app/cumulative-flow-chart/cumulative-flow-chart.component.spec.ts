import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockObjectStoreBackendService } from '../backend/object-store-backend.service.spec';
import { ObjectStoreBackendService } from '../backend/object-store-backend.service';

import { CumulativeFlowChartComponent } from './cumulative-flow-chart.component';
import { MockHeijunkaBoardService } from '../domain-services/heijunka-board.service.spec';
import { HeijunkaBoardService } from '../domain-services/heijunka-board.service';
import { KanbanCardService } from '../domain-services/kanban-card.service';

describe('CumulativeFlowChartComponent', () => {
  let component: CumulativeFlowChartComponent;
  let fixture: ComponentFixture<CumulativeFlowChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CumulativeFlowChartComponent],
      providers: [
        { provide: HeijunkaBoardService, useClass: MockHeijunkaBoardService },
        { provide: ObjectStoreBackendService, useClass: MockObjectStoreBackendService },
        KanbanCardService,
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CumulativeFlowChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
