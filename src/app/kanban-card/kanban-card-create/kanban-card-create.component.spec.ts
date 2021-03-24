import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockObjectStoreBackendService } from '../../backend/object-store-backend.service.spec';
import { ObjectStoreBackendService } from '../../backend/object-store-backend.service';
import { FormsModule } from '@angular/forms';

import { KanbanCardCreateComponent } from './kanban-card-create.component';
import { MockHeijunkaBoardService } from '../../domain-services/heijunka-board.service.spec';
import { HeijunkaBoardService } from '../../domain-services/heijunka-board.service';

describe('KanbanCardCreateComponent', () => {
  let component: KanbanCardCreateComponent;
  let fixture: ComponentFixture<KanbanCardCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanbanCardCreateComponent],
      imports: [
        FormsModule, HttpClientTestingModule]
      ,
      providers: [
        { provide: HeijunkaBoardService, useClass: MockHeijunkaBoardService },
        { provide: ObjectStoreBackendService, useClass: MockObjectStoreBackendService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanCardCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
