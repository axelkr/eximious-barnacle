import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockObjectStoreBackendService } from '../backend/object-store-backend.service.spec';
import { ObjectStoreBackendService } from '../backend/object-store-backend.service';

import { HeijunkaBoardService } from '../domain-services/heijunka-board.service';
import { MockHeijunkaBoardService } from '../domain-services/heijunka-board.service.spec';

import { StateModelService } from './state-model.service';

describe('StateModelService', () => {
  let service: StateModelService;

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
    service = TestBed.inject(StateModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});