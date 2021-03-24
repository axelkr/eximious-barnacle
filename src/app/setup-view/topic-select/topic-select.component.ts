import { Component, OnInit } from '@angular/core';
import { Topic } from 'choicest-barnacle';
import { TopicService } from '../../domain-services/topic.service';

@Component({
  selector: 'app-topic-select',
  templateUrl: './topic-select.component.html'
})
export class TopicSelectComponent implements OnInit {
  topic: Topic | undefined;

  constructor(public topicService: TopicService) {
    this.topic = topicService.current();
  }

  ngOnInit(): void {
  }

  setTopic(topic: Topic) {
    if (topic === undefined) {
      return;
    }
    this.topicService.switchTo(topic);
  }
}
