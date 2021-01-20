import { ProcessObjectEventCommand} from './processObjectEventCommand';
import { ObjectEvent } from './objectEvent';
import { Task } from '../model/task';

export class ProcessUpdateState implements ProcessObjectEventCommand {
  readonly objectEventTypeProcessing: string = 'UpdateTaskState';

  constructor() { }

  process(objectEvent: ObjectEvent, tasks: Task[]): Task[] {
    return tasks;
  }
}
