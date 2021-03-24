import { Injectable } from '@angular/core';

import { Project, StateModel, ProjectEventFactory, ProjectProperties } from 'outstanding-barnacle';
import { HeijunkaBoardService } from './heijunka-board.service';
import { TopicService } from './topic.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly projectEventFactory = new ProjectEventFactory();

  constructor(private modelBoardService: HeijunkaBoardService, private topicService: TopicService) { }

  public availableProjects(): Project[] {
    return this.modelBoardService.getDomainModel().projects.getProjects();
  }

  public get(id: string): Project {
    return this.modelBoardService.getDomainModel().projects.get(id);
  }

  public getStateModel(id: string | Project): StateModel {
    let project: Project;
    if (typeof id === 'string') {
      project = this.modelBoardService.getDomainModel().projects.get(id);
    } else {
      project = id;
    }
    return this.modelBoardService.getDomainModel().stateModels.get(project.stateModelId);
  }

  public create(name: string, stateModel: StateModel) {
    const createdProjectEvents = this.projectEventFactory.create(this.topicService.current(), name, stateModel);
    this.modelBoardService.processObjectEvents(createdProjectEvents);
  }

  public renameTo(project: Project, newName: string) {
    const renameProjectEvent = this.projectEventFactory.updateProperty(this.topicService.current(),
      project, ProjectProperties.NAME, newName);
    this.modelBoardService.processObjectEvent(renameProjectEvent);
  }
}

