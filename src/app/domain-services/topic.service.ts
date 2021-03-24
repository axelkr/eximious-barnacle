import { Injectable } from '@angular/core';
import { Topic } from 'choicest-barnacle';

import { ObjectStoreBackendService } from '../backend/object-store-backend.service';
import { HeijunkaBoardService } from './heijunka-board.service';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private backend: ObjectStoreBackendService, private boardService: HeijunkaBoardService) { }

  public current(): Topic {
    return this.boardService.currentTopic2();
  }

  public available(): Topic[] {
    return this.boardService.availableTopics2();
  }

  public switchTo(topic: Topic): void {
    this.boardService.switchToTopic2(topic);
  }

  public create(name: string): void {
    this.boardService.createTopic2(name);
  }

}
