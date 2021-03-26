import { Injectable } from '@angular/core';

import { ContextEventFactory, Context } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../domain-services/heijunka-board.service';
import { TopicService } from './topic.service';

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  private readonly eventFactory = new ContextEventFactory();
  private readonly activeContexts: Context[] = [];

  constructor(private modelBoardService: HeijunkaBoardService, private topicService: TopicService) { }

  public create(name: string) {
    const createContextEvent = this.eventFactory.create(this.topicService.current(), name);
    this.modelBoardService.processObjectEvent(createContextEvent);
  }

  public availableContexts(): Context[] {
    return this.modelBoardService.getDomainModel().contexts.getContexts();
  }

  public activate(context: Context) {
    const alreadyActive = (this.activeContexts.findIndex(aContext => (aContext.id === context.id)) >= 0);
    if (alreadyActive) {
      return;
    }
    this.activeContexts.push(context);
  }

  public deactivate(context: Context) {
    const atIndex = (this.activeContexts.findIndex(aContext => (aContext.id === context.id)));
    if (atIndex >= 0) {
      this.activeContexts.splice(atIndex, 1);
    }
  }

  public isActive(context: Context) {
    const noContextExplicitlyActivated = this.activeContexts.length === 0;
    if (noContextExplicitlyActivated) {
      return true;
    }
    return this.activeContexts.findIndex(aContext => (aContext.id === context.id)) >= 0;
  }
}
