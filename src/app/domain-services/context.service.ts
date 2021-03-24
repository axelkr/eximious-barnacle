import { Injectable } from '@angular/core';

import { ObjectEventFactory } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../domain-services/heijunka-board.service';

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  private readonly eventFactory = new ObjectEventFactory();

  constructor(private modelBoardService: HeijunkaBoardService) { }

  public create(name: string) {
    const createContextEvent = this.eventFactory.createContext(this.modelBoardService.currentTopic(), name);
    this.modelBoardService.processObjectEvent(createContextEvent);
  }
}
