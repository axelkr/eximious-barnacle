import { UpdateStateCommand } from './updateStateCommand';

import { Task } from '../model/task';
import { ObjectEvent } from './objectEvent';

describe('UpdateStateCommand', () => {
  let service: UpdateStateCommand;

  beforeEach(() => {
    service = new UpdateStateCommand();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
