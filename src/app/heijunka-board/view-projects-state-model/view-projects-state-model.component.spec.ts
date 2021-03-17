import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProjectsStateModelComponent } from './view-projects-state-model.component';

describe('ViewProjectsStateModelComponent', () => {
  let component: ViewProjectsStateModelComponent;
  let fixture: ComponentFixture<ViewProjectsStateModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProjectsStateModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProjectsStateModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
