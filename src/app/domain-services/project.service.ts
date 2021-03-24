import { Injectable } from '@angular/core';

import { Project } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../domain-services/heijunka-board.service';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private modelBoardService: HeijunkaBoardService) { }

  public availableProjects(): Project[] {
    return this.modelBoardService.getDomainModel().projects.getProjects();
  }
}
