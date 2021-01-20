import { Component, OnInit } from '@angular/core';
import { ModelTasksService } from '../model-tasks.service';
import { Topic } from '../model/topic';

@Component({
  selector: 'app-task-list',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.less']
})
export class TopicComponent implements OnInit {
  topic: Topic;

  constructor(private modelTasksService: ModelTasksService) {
    this.topic = this.modelTasksService.getTopic();
   }

  ngOnInit(): void {
  }
}
