import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CumulativeFlowChartComponent } from './cumulative-flow-chart.component';

describe('CumulativeFlowChartComponent', () => {
  let component: CumulativeFlowChartComponent;
  let fixture: ComponentFixture<CumulativeFlowChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CumulativeFlowChartComponent ]
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
