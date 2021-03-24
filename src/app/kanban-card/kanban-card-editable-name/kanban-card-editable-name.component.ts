import { Component, OnInit, Input } from '@angular/core';
import { KanbanCard } from 'outstanding-barnacle';
import { KanbanCardService } from '../../domain-services/kanban-card.service';

@Component({
  selector: 'app-kanban-card-editable-name',
  templateUrl: './kanban-card-editable-name.component.html'
})
export class KanbanCardEditableNameComponent implements OnInit {
  @Input() kanbanCard: KanbanCard | undefined;
  renameMode = false;

  constructor(private kanbanCardService: KanbanCardService) { }

  ngOnInit(): void {
  }

  commitRename(event: any): void {
    if (this.kanbanCard === undefined) {
      return;
    }
    this.kanbanCardService.renameTo(this.kanbanCard, event.target.value);
    this.renameMode = false;
  }

  cancelRename(): void {
    this.renameMode = false;
  }

  activateRenameMode(): void {
    this.renameMode = true;
  }
}
