import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CumulativeFlowChartComponent } from './cumulative-flow-chart.component';
import {MockHeijunkaBoardService} from '../heijunka-board.service.spec';
import {HeijunkaBoardService} from '../heijunka-board.service';

describe('CumulativeFlowChartComponent', () => {
  let component: CumulativeFlowChartComponent;
  let fixture: ComponentFixture<CumulativeFlowChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CumulativeFlowChartComponent ],
      providers: [
        { provide: HeijunkaBoardService, useClass: MockHeijunkaBoardService }
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
