import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockObjectStoreBackendService } from '../backend/object-store-backend.service.spec';
import { ObjectStoreBackendService } from '../backend/object-store-backend.service';
import { RouterTestingModule } from '@angular/router/testing';

import { ProjectViewComponent } from './project-view.component';
import { MockHeijunkaBoardService } from '../domain-services/heijunka-board.service.spec';
import { HeijunkaBoardService } from '../domain-services/heijunka-board.service';

describe('ProjectViewComponent', () => {
  let component: ProjectViewComponent;
  let fixture: ComponentFixture<ProjectViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectViewComponent],
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
    fixture = TestBed.createComponent(ProjectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
