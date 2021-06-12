import { Component, OnInit, } from '@angular/core';
import { KanbanCardService } from '../../domain-services/kanban-card.service';
import { ProjectService } from '../../domain-services/project.service';

@Component({
  selector: 'app-kanban-card-progress-list',
  templateUrl: './kanban-card-progress-list.component.html'
})
export class KanbanCardProgressListComponent implements OnInit {
  showDataFrom: Date;
  showDataUntil: Date;

  constructor(public projectService: ProjectService, public kanbanCardService: KanbanCardService) {
    const now = new Date();
    this.showDataFrom = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    this.showDataUntil = new Date(this.showDataFrom.getTime());
    this.showDataFrom.setDate(this.showDataFrom.getDate() - 14);
  }

  ngOnInit(): void {
  }

  onShowDataFromSelected(event: any) {
    this.updateDateRange(event.value, this.showDataUntil);
  }

  onShowDataUntilSelected(event: any) {
    this.updateDateRange(this.showDataFrom, event.value);
  }

  private updateDateRange(showFrom: Date, showUntil: Date) {
    const validDateRange = showFrom < showUntil;
    if (!validDateRange) {
      return;
    }
    this.showDataFrom = showFrom;
    this.showDataUntil = showUntil;
  }
}
