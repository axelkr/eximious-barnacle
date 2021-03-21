import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProjectStateViewComponent } from './project-state-view.component';
import { MockHeijunkaBoardService } from '../heijunka-board.service.spec';
import { HeijunkaBoardService } from '../heijunka-board.service';

describe('ProjectStateViewDetailsComponent', () => {
  let component: ProjectStateViewComponent;
  let fixture: ComponentFixture<ProjectStateViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectStateViewComponent],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: HeijunkaBoardService, useClass: MockHeijunkaBoardService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
