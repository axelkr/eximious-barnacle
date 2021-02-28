import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProjectStateDetailsComponent } from './project-state-details.component';
import {MockHeijunkaBoardService} from '../heijunka-board.service.spec';
import {HeijunkaBoardService} from '../heijunka-board.service';

describe('ProjectStateDetailsComponent', () => {
  let component: ProjectStateDetailsComponent;
  let fixture: ComponentFixture<ProjectStateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectStateDetailsComponent ],
      imports:[
        RouterTestingModule
      ],
      providers: [
        { provide: HeijunkaBoardService, useClass: MockHeijunkaBoardService }
      ]
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
