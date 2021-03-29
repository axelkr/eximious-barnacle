import { Injectable } from '@angular/core';

import { KanbanCard, TaskEventFactory, Task } from 'outstanding-barnacle';
import { HeijunkaBoardService } from './heijunka-board.service';
import { TopicService } from './topic.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly taskEventFactory = new TaskEventFactory();

  constructor(private modelBoardService: HeijunkaBoardService, private topicService: TopicService) { }

  public create(description: string, parent: KanbanCard) {
    const createTaskEvent = this.taskEventFactory.create(this.topicService.current(), parent, description);
    this.modelBoardService.processObjectEvent(createTaskEvent);
  }

  public markAsDone(task: Task) {
    const markAsDone = this.taskEventFactory.markAsDone(this.topicService.current(), task);
    this.modelBoardService.processObjectEvent(markAsDone);
  }

  public get(id: string): Task {
    return this.modelBoardService.getDomainModel().tasks.get(id);
  }
}
