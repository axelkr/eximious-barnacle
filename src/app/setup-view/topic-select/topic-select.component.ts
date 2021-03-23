import { Component, OnInit } from '@angular/core';
import { Topic } from 'choicest-barnacle';
import { HeijunkaBoardService } from '../../heijunka-board.service';

@Component({
  selector: 'app-topic-select',
  templateUrl: './topic-select.component.html'
})
export class TopicSelectComponent implements OnInit {
  topic: Topic | undefined;

  constructor(public modelBoardService: HeijunkaBoardService) {
    this.topic = modelBoardService.currentTopic();
  }

  ngOnInit(): void {
  }

  setTopic(topic: Topic) {
    if (topic === undefined) {
      return;
    }
    this.modelBoardService.switchToTopic(topic);
  }
}
