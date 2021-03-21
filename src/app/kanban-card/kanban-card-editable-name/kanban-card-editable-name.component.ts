import { Component, OnInit, Input } from '@angular/core';
import { KanbanCard, KanbanCardProperties } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../../heijunka-board.service';

@Component({
  selector: 'app-kanban-card-editable-name',
  templateUrl: './kanban-card-editable-name.component.html',
  styleUrls: ['./kanban-card-editable-name.component.less']
})
export class KanbanCardEditableNameComponent implements OnInit {
  @Input() kanbanCard: KanbanCard | undefined;
  renameMode = false;

  constructor(private modelBoardService: HeijunkaBoardService) { }

  ngOnInit(): void {
  }

  commitRename(event: any): void {
    this.renameTo(event.target.value);
    this.renameMode = false;
  }

  cancelRename(): void {
    this.renameMode = false;
  }

  activateRenameMode(): void {
    this.renameMode = true;
  }

  private renameTo(newName: string): void {
    if (this.kanbanCard === undefined) {
      return;
    }
    const renameKanbanCardEvent = this.modelBoardService.kanbanCardEventFactory.
      updateProperty(this.modelBoardService.currentTopic(), this.kanbanCard, KanbanCardProperties.NAME, newName);
    this.modelBoardService.processObjectEvent(renameKanbanCardEvent);
  }
}
