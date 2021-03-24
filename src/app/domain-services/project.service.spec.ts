import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockObjectStoreBackendService } from '../backend/object-store-backend.service.spec';
import { ObjectStoreBackendService } from '../backend/object-store-backend.service';

import { HeijunkaBoardService } from '../domain-services/heijunka-board.service';
import { MockHeijunkaBoardService } from '../domain-services/heijunka-board.service.spec';

import { ProjectService } from './project.service';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: ObjectStoreBackendService, useClass: MockObjectStoreBackendService },
        { provide: HeijunkaBoardService, useClass: MockHeijunkaBoardService }
      ]
    });
    service = TestBed.inject(ProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
