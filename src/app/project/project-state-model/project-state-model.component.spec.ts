import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStateModelComponent } from './project-state-model.component';

describe('ProjectStateModelComponent', () => {
  let component: ProjectStateModelComponent;
  let fixture: ComponentFixture<ProjectStateModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectStateModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStateModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
