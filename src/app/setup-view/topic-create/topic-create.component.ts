import { Component, OnInit } from '@angular/core';
import { HeijunkaBoardService } from '../../heijunka-board.service';

@Component({
  selector: 'app-topic-create',
  templateUrl: './topic-create.component.html'
})
export class TopicCreateComponent implements OnInit {
  model: { name: string } = { name: '' };

  constructor(public modelBoardService: HeijunkaBoardService) {
  }

  ngOnInit(): void {
  }

  createTopic(): void {
    const isDoubleSubmit = (this.model.name === null || this.model.name.length === 0);
    if (isDoubleSubmit) {
      return;
    }
    this.modelBoardService.createTopic(this.model.name);
  }
}
