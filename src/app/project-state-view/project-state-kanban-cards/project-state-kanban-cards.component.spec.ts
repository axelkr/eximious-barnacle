import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockObjectStoreBackendService } from '../../backend/object-store-backend.service.spec';
import { ObjectStoreBackendService } from '../../backend/object-store-backend.service';

import { ProjectStateKanbanCardsComponent } from './project-state-kanban-cards.component';
import { MockHeijunkaBoardService } from '../../domain-services/heijunka-board.service.spec';
import { HeijunkaBoardService } from '../../domain-services/heijunka-board.service';

describe('ProjectStateKanbanCardsComponent', () => {
  let component: ProjectStateKanbanCardsComponent;
  let fixture: ComponentFixture<ProjectStateKanbanCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectStateKanbanCardsComponent],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: HeijunkaBoardService, useClass: MockHeijunkaBoardService },
        { provide: ObjectStoreBackendService, useClass: MockObjectStoreBackendService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStateKanbanCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
