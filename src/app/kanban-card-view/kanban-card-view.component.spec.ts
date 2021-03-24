import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockObjectStoreBackendService } from '../backend/object-store-backend.service.spec';
import { ObjectStoreBackendService } from '../backend/object-store-backend.service';
import { RouterTestingModule } from '@angular/router/testing';

import { KanbanCardViewComponent } from './kanban-card-view.component';
import { MockHeijunkaBoardService } from '../domain-services/heijunka-board.service.spec';
import { HeijunkaBoardService } from '../domain-services/heijunka-board.service';

describe('KanbanCardViewComponent', () => {
  let component: KanbanCardViewComponent;
  let fixture: ComponentFixture<KanbanCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanbanCardViewComponent],
      imports: [
        RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: HeijunkaBoardService, useClass: MockHeijunkaBoardService },
        { provide: ObjectStoreBackendService, useClass: MockObjectStoreBackendService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
