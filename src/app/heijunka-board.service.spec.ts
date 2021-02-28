import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {MockObjectStoreBackendService} from './backend/object-store-backend.service.spec';
import {ObjectStoreBackendService} from './backend/object-store-backend.service';

import { HeijunkaBoardService } from './heijunka-board.service';

describe('HeijunkaBoardService', () => {
  let service: HeijunkaBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [
      HttpClientTestingModule
    ],
    providers: [
      { provide: ObjectStoreBackendService, useClass: MockObjectStoreBackendService }
    ]
  });
    service = TestBed.inject(HeijunkaBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
