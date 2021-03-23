import { TestBed } from '@angular/core/testing';

import { ColorizeStateModelService } from './colorize-state-model.service';

describe('ColorizeStateModelService', () => {
  let service: ColorizeStateModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorizeStateModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
