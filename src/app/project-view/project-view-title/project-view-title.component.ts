import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'outstanding-barnacle';
import { ProjectService } from '../../domain-services/project.service';

@Component({
  selector: 'app-project-view-title',
  templateUrl: './project-view-title.component.html'
})
export class ProjectViewTitleComponent implements OnInit {
  @Input() project: Project | undefined;
  renameMode = false;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
  }

  commitRename(event: any): void {
    if (this.project === undefined) {
      return;
    }
    this.projectService.renameTo(this.project, event.target.value);
    this.renameMode = false;
  }

  cancelRename(): void {
    this.renameMode = false;
  }

  activateRenameMode(): void {
    this.renameMode = true;
  }
}
