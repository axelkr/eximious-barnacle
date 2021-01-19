import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ObjectStoreBackendService } from './object-store-backend.service';

describe('ObjectStoreBackendService', () => {
  let service: ObjectStoreBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]});
    service = TestBed.inject(ObjectStoreBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
