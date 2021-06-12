import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { KanbanCard } from 'outstanding-barnacle';
import { KanbanCardService } from '../../domain-services/kanban-card.service';
import { ProjectService } from '../../domain-services/project.service';

@Component({
  selector: 'app-kanban-card-progress-list',
  templateUrl: './kanban-card-progress-list.component.html'
})
export class KanbanCardProgressListComponent implements OnInit, OnChanges {
  public kanbanCards: KanbanCard[] = [];

  constructor(public projectService: ProjectService, public kanbanCardService: KanbanCardService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.update();
  }

  ngOnInit(): void {
    this.update();
  }

  private update() {
    const kanbanCardsInFocus: KanbanCard[] = [];
    this.projectService.availableProjects().forEach(aProject => {
      if (!this.projectService.isInFocus(aProject)) {
        return;
      }
      this.kanbanCardService.find({
        project: aProject
      }).forEach(aKanbanCard => kanbanCardsInFocus.push(aKanbanCard));
    });

    this.kanbanCards = kanbanCardsInFocus;
  }
}
