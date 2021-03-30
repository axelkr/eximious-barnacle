import { Pipe, PipeTransform } from '@angular/core';
import { Task } from 'outstanding-barnacle';

@Pipe({
  name: 'doneTasks'
})
export class DoneTasksPipe implements PipeTransform {

  transform(tasks: Task[], ...args: unknown[]): Task[] {
    return tasks.filter(a => !a.isDone());
  }

}
