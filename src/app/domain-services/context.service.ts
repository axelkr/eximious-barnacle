import { Injectable } from '@angular/core';

import { ContextEventFactory, Context } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../domain-services/heijunka-board.service';
import { TopicService } from './topic.service';

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  private readonly eventFactory = new ContextEventFactory();

  constructor(private modelBoardService: HeijunkaBoardService, private topicService: TopicService) { }

  public create(name: string) {
    const createContextEvent = this.eventFactory.create(this.topicService.current(), name);
    this.modelBoardService.processObjectEvent(createContextEvent);
  }

  public availableContexts(): Context[] {
    return this.modelBoardService.getDomainModel().contexts.getContexts();
  }
}
