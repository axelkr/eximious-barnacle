import { Injectable } from '@angular/core';

import { ContextEventFactory, Context, KanbanCard } from 'outstanding-barnacle';
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

  public activate(context: Context) {
    const activateContextEvent = this.eventFactory.activate(this.topicService.current(), context);
    this.modelBoardService.processObjectEvent(activateContextEvent);
  }

  public deactivate(context: Context) {
    const deactivateContextEvent = this.eventFactory.deactivate(this.topicService.current(), context);
    this.modelBoardService.processObjectEvent(deactivateContextEvent);
  }

  public isExplicitlyActive(context: Context): boolean {
    return this.modelBoardService.getDomainModel().contexts.isExplicitlyActive(context);
  }

  public isIdActive(id: string, context: Context): boolean {
    return this.modelBoardService.getDomainModel().contexts.isIdActive(id, context);
  }

  public set(kanbanCard: KanbanCard, context: Context) {
    const setContextEvent = this.eventFactory.setContext(this.topicService.current(), context, kanbanCard);
    this.modelBoardService.processObjectEvent(setContextEvent);
  }

  public unset(kanbanCard: KanbanCard, context: Context) {
    const unsetContextEvent = this.eventFactory.unsetContext(this.topicService.current(), context, kanbanCard);
    this.modelBoardService.processObjectEvent(unsetContextEvent);
  }

  public describeContexts(contexts: Context[], descriptionIfEmpty: string): string {
    let description = '';
    contexts.forEach(aContext => {
      description += aContext.name + ', ';
    });

    if (description.length === 0) {
      return descriptionIfEmpty;
    }
    // drop trailing ', ';
    description = description.substr(0, description.length - 2);
    return description;
  }
}
