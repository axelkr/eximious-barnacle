import { Component, OnInit } from '@angular/core';
import { ModelTasksService } from '../model-tasks.service';
import { TaskAddComponent} from '../task-add/task-add.component';
import { Task } from '../model/task';
import { Topic } from '../model/topic';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.less']
})
export class TaskListComponent implements OnInit {
  topic: Topic;

  constructor(private modelTasksService: ModelTasksService) {
    this.topic = this.modelTasksService.getTopic();
   }

  ngOnInit(): void {
  }
}
