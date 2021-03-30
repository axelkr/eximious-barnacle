import { Pipe, PipeTransform } from '@angular/core';
import { Task } from 'outstanding-barnacle';

@Pipe({
  name: 'doneTasks'
})
export class DoneTasksPipe implements PipeTransform {

  transform(tasks: Task[], filterDoneTasks: boolean = true): Task[] {

    if (filterDoneTasks) {
      return tasks.filter(a => a.isDone());
    } else {
      return tasks.filter(a => !a.isDone());
    }
  }
}
