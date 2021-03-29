import { Component, OnInit, Input } from '@angular/core';
import { KanbanCard, Task } from 'outstanding-barnacle';
import { TaskService } from '../../domain-services/task.service';
import { KanbanCardService } from '../../domain-services/kanban-card.service';

@Component({
  selector: 'app-kanban-card-view-tasks',
  templateUrl: './kanban-card-view-tasks.component.html'
})
export class KanbanCardViewTasksComponent implements OnInit {
  @Input() kanbanCard: KanbanCard | undefined;
  model = { name: '' };


  constructor(public kanbanCardService: KanbanCardService, public taskService: TaskService) { }

  ngOnInit(): void {
  }

  public onChange(task: Task, event: any) {
    if (this.kanbanCard === undefined) {
      return;
    }
    const isChecked: boolean = event.target.checked;
    if (isChecked) {
      this.taskService.markAsDone(task);
    }
  }

  public newTask(): void {
    if (this.kanbanCard === undefined) {
      return;
    }

    this.taskService.create(this.model.name, this.kanbanCard);
  }
}
