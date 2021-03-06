import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateModelsComponent } from './state-models.component';

describe('StateModelsComponent', () => {
  let component: StateModelsComponent;
  let fixture: ComponentFixture<StateModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
