import { TestBed } from '@angular/core/testing';

import { ObjectEventFactoryService } from './object-event-factory.service';

describe('ObjectEventFactoryService', () => {
  let service: ObjectEventFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectEventFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
