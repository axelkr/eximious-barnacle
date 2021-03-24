import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockObjectStoreBackendService } from '../../backend/object-store-backend.service.spec';
import { ObjectStoreBackendService } from '../../backend/object-store-backend.service';
import { FormsModule } from '@angular/forms';

import { ProjectAddComponent } from './project-add.component';
import { MockHeijunkaBoardService } from '../../domain-services/heijunka-board.service.spec';
import { HeijunkaBoardService } from '../../domain-services/heijunka-board.service';

describe('ProjectAddComponent', () => {
  let component: ProjectAddComponent;
  let fixture: ComponentFixture<ProjectAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectAddComponent],
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
    fixture = TestBed.createComponent(ProjectAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
