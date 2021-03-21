import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEditableNameComponent } from './project-editable-name.component';

describe('ProjectEditableNameComponent', () => {
  let component: ProjectEditableNameComponent;
  let fixture: ComponentFixture<ProjectEditableNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectEditableNameComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEditableNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
