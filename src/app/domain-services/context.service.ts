import { Injectable } from '@angular/core';

import { ContextEventFactory, Context, KanbanCard } from 'outstanding-barnacle';
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
    const indexOfContextToDeactivate = (this.activeContexts.findIndex(aContext => (aContext.id === context.id)));
    if (indexOfContextToDeactivate >= 0) {
      this.activeContexts.splice(indexOfContextToDeactivate, 1);
    }
  }

  public isActive(context: Context): boolean {
    const noContextExplicitlyActivated = this.activeContexts.length === 0;
    if (noContextExplicitlyActivated) {
      return true;
    }
    return this.isExplicitlyActive(context);
  }

  public isExplicitlyActive(context: Context): boolean {
    return this.activeContexts.findIndex(aContext => (aContext.id === context.id)) >= 0;
  }

  public isIdActive(id: string): boolean {
    const noContextExplicitlyActivated = this.activeContexts.length === 0;
    if (noContextExplicitlyActivated) {
      return true;
    }
    let idActiveInAtLeastOneContext = false;
    this.activeContexts.forEach(anActiveContext => {
      if (anActiveContext.contains(id)) {
        idActiveInAtLeastOneContext = true;
      }
    });
    return idActiveInAtLeastOneContext;
  }

  public isIdActiveInContext(id: string, context: Context): boolean {
    let idActiveInContext = false;
    this.modelBoardService.getDomainModel().contexts.getContexts()
      .filter(aContext => aContext.id === context.id)
      .forEach(anActiveContext => {
      if (anActiveContext.contains(id)) {
        idActiveInContext = true;
      }
    });
    return idActiveInContext;
  }

  public set(kanbanCard: KanbanCard, context: Context) {
    const setContextEvent = this.eventFactory.setContext(this.topicService.current(), context, kanbanCard);
    this.modelBoardService.processObjectEvent(setContextEvent);
  }

  public unset(kanbanCard: KanbanCard, context: Context) {
    const unsetContextEvent = this.eventFactory.unsetContext(this.topicService.current(), context, kanbanCard);
    this.modelBoardService.processObjectEvent(unsetContextEvent);
  }

  public describeContexts(contexts: Context[]): string {
    let description = '';
    contexts.forEach(aContext => {
      description += aContext.name + ', ';
    });
    // drop trailing ', ';
    if (description.length > 0) {
      description = description.substr(0,description.length-2);
    }
    return description ;
  }
}
