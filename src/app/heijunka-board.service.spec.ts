import { TestBed } from '@angular/core/testing';

import { HeijunkaBoardService } from './heijunka-board.service';

describe('HeijunkaBoardService', () => {
  let service: HeijunkaBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeijunkaBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
