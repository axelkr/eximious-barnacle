import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEditableNameComponent } from './project-editable-name.component';
import { MockHeijunkaBoardService } from '../../domain-services/heijunka-board.service.spec';
import { HeijunkaBoardService } from '../../domain-services/heijunka-board.service';

describe('ProjectEditableNameComponent', () => {
  let component: ProjectEditableNameComponent;
  let fixture: ComponentFixture<ProjectEditableNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectEditableNameComponent],
      providers: [
        { provide: HeijunkaBoardService, useClass: MockHeijunkaBoardService }
      ]
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
