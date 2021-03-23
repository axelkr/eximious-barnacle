import { TestBed } from '@angular/core/testing';

import { ColorizeService } from './colorize.service';

describe('ColorizeService', () => {
  let service: ColorizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
