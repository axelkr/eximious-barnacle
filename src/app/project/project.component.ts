import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../heijunka-board.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.less']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project | undefined;
  renameMode = false;

  constructor(public heijunkaBoardService: HeijunkaBoardService) { }

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
    const renameEvent = this.heijunkaBoardService.eventFactory.renameProject(this.heijunkaBoardService.currentTopic,this.project,newName);
    this.heijunkaBoardService.processObjectEvent(renameEvent);
  }
}
