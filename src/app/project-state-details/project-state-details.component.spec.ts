import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStateDetailsComponent } from './project-state-details.component';

describe('ProjectStateDetailsComponent', () => {
  let component: ProjectStateDetailsComponent;
  let fixture: ComponentFixture<ProjectStateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectStateDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
