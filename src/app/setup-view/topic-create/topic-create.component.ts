import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../domain-services/topic.service';

@Component({
  selector: 'app-topic-create',
  templateUrl: './topic-create.component.html'
})
export class TopicCreateComponent implements OnInit {
  model: { name: string } = { name: '' };

  constructor(private topicService: TopicService) {
  }

  ngOnInit(): void {
  }

  createTopic(): void {
    const isDoubleSubmit = (this.model.name === null || this.model.name.length === 0);
    if (isDoubleSubmit) {
      return;
    }
    this.topicService.create(this.model.name);
  }
}
