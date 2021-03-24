import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProjectStateOverviewComponent } from './project-state-overview.component';

import { MockHeijunkaBoardService } from '../../domain-services/heijunka-board.service.spec';
import { HeijunkaBoardService } from '../../domain-services/heijunka-board.service';

describe('ProjectStateOverviewComponent', () => {
  let component: ProjectStateOverviewComponent;
  let fixture: ComponentFixture<ProjectStateOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectStateOverviewComponent],
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
    fixture = TestBed.createComponent(ProjectStateOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
