import { ObjectEvent } from './objectEvent';
import { Task } from './task';

export interface ProcessObjectEventService {
  readonly objectEventTypeProcessing: string;
  process(objectEvent: ObjectEvent, tasks: Task[]): Task[];
}
