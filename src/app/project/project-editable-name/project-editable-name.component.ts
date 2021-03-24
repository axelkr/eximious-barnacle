import { Component, OnInit, Input } from '@angular/core';
import { Project, ProjectProperties } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../../domain-services/heijunka-board.service';

@Component({
  selector: 'app-project-editable-name',
  templateUrl: './project-editable-name.component.html',
  styleUrls: ['./project-editable-name.component.less']
})
export class ProjectEditableNameComponent implements OnInit {
  @Input() project: Project | undefined;
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
    if (this.project === undefined) {
      return;
    }
    const renameProjectEvent = this.modelBoardService.projectEventFactory.
      updateProperty(this.modelBoardService.currentTopic(), this.project, ProjectProperties.NAME, newName);
    this.modelBoardService.processObjectEvent(renameProjectEvent);
  }
}
