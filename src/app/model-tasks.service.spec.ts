import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ModelTasksService } from './model-tasks.service';

describe('ModelTasksService', () => {
  let service: ModelTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [
      HttpClientModule
    ]});
    service = TestBed.inject(ModelTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
