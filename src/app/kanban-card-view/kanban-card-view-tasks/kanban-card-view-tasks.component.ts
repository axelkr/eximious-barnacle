import { Component, OnInit, Input } from '@angular/core';
import { Task, KanbanCard } from 'outstanding-barnacle';
import { TaskService } from '../../domain-services/task.service';

@Component({
  selector: 'app-kanban-card-view-tasks',
  templateUrl: './kanban-card-view-tasks.component.html'
})
export class KanbanCardViewTasksComponent implements OnInit {
  @Input() parent: KanbanCard | Task | undefined;
  model = { name: '' };

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
  }

  public onChange(task: Task, event: any) {
    if (this.parent === undefined) {
      return;
    }
    const isChecked: boolean = event.target.checked;
    if (isChecked) {
      this.taskService.markAsDone(task);
    }
  }

  public newTask(): void {
    if (this.parent === undefined) {
      return;
    }

    this.taskService.create(this.model.name, this.parent);
  }
}
