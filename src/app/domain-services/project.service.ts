import { Injectable } from '@angular/core';

import { Project, StateModel } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../domain-services/heijunka-board.service';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

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
}

