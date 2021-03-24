import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'outstanding-barnacle';
import { KanbanCardService } from '../../domain-services/kanban-card.service';

@Component({
  selector: 'app-kanban-card-create',
  templateUrl: './kanban-card-create.component.html',
  styleUrls: ['./kanban-card-create.component.less']
})
export class KanbanCardCreateComponent implements OnInit {
  @Input() project: Project | undefined;
  model = { name: '' };

  constructor(private kanbanCardService: KanbanCardService) { }

  ngOnInit(): void {
  }

  newKanbanCard(): void {
    if (this.project === undefined) {
      return;
    }

    this.kanbanCardService.create(this.model.name, this.project);
  }
}
