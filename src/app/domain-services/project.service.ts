import { Injectable } from '@angular/core';

import { Project, StateModel, ProjectEventFactory } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../domain-services/heijunka-board.service';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly projectEventFactory = new ProjectEventFactory();

  constructor(private modelBoardService: HeijunkaBoardService) { }

  public availableProjects(): Project[] {
    return this.modelBoardService.getDomainModel().projects.getProjects();
  }

  public get(id: string): Project {
    return this.modelBoardService.getDomainModel().projects.get(id);
  }

  public getStateModel(id: string | Project): StateModel {
    if (typeof id === 'string') {
      const project = this.modelBoardService.getDomainModel().projects.get(id);
      return this.modelBoardService.getDomainModel().getStateModelOf(project);
    } else {
      return this.modelBoardService.getDomainModel().getStateModelOf(id);
    }
  }

  public create(name: string, stateModel: StateModel) {
    const createdProjectEvents = this.projectEventFactory.create(this.modelBoardService.currentTopic(), name, stateModel);
    this.modelBoardService.processObjectEvents(createdProjectEvents);
  }

  public renameTo(project: Project, newName: string) {

  }
}

