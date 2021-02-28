import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProjectStateComponent } from './project-state.component';

import {MockHeijunkaBoardService} from '../heijunka-board.service.spec';
import {HeijunkaBoardService} from '../heijunka-board.service';

describe('ProjectStateComponent', () => {
  let component: ProjectStateComponent;
  let fixture: ComponentFixture<ProjectStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectStateComponent ],
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
    fixture = TestBed.createComponent(ProjectStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
