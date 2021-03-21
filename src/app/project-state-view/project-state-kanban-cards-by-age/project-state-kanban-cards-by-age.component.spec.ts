import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStateKanbanCardsByAgeComponent } from './project-state-kanban-cards-by-age.component';
import { MockHeijunkaBoardService } from '../../heijunka-board.service.spec';
import { HeijunkaBoardService } from '../../heijunka-board.service';


describe('ProjectStateKanbanCardsByAgeComponent', () => {
  let component: ProjectStateKanbanCardsByAgeComponent;
  let fixture: ComponentFixture<ProjectStateKanbanCardsByAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectStateKanbanCardsByAgeComponent],
      providers: [
        { provide: HeijunkaBoardService, useClass: MockHeijunkaBoardService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStateKanbanCardsByAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
