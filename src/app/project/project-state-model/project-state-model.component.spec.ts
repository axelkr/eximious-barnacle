import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStateModelComponent } from './project-state-model.component';
import { MockHeijunkaBoardService } from '../../heijunka-board.service.spec';
import { HeijunkaBoardService } from '../../heijunka-board.service';


describe('ProjectStateModelComponent', () => {
  let component: ProjectStateModelComponent;
  let fixture: ComponentFixture<ProjectStateModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectStateModelComponent],
      providers: [
        { provide: HeijunkaBoardService, useClass: MockHeijunkaBoardService }
      ]
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
