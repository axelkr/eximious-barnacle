import { ProcessUpdateState } from './processUpdateState';

import { Task } from '../model/task';
import { ObjectEvent } from './objectEvent';

describe('ProcessUpdateState', () => {
  let service: ProcessUpdateState;

  beforeEach(() => {
    service = new ProcessUpdateState();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
