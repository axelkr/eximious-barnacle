import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic.service';
import { Topic } from '../model/topic';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.less']
})
export class TopicComponent implements OnInit {
  topic: Topic;

  constructor(private modelTasksService: TopicService) {
    this.topic = this.modelTasksService.getTopic();
   }

  ngOnInit(): void {
  }
}
