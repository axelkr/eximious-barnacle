import { Injectable } from '@angular/core';

import { Project, StateModel, ProjectEventFactory, ProjectProperties } from 'outstanding-barnacle';
import { HeijunkaBoardService } from './heijunka-board.service';
import { TopicService } from './topic.service';
import { SettingsService } from '../backend/settings.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  private readonly PROJECTS_IN_FOCUS_SETTING: string = 'ProjectsInFocus';
  private readonly projectsInFocusCache: string[];
  private readonly projectEventFactory = new ProjectEventFactory();

  constructor(private modelBoardService: HeijunkaBoardService, private topicService: TopicService,
    private settingsService: SettingsService) {
    if (!settingsService.has(this.PROJECTS_IN_FOCUS_SETTING)) {
      settingsService.setArray(this.PROJECTS_IN_FOCUS_SETTING, []);
    }
    this.projectsInFocusCache = settingsService.getArray(this.PROJECTS_IN_FOCUS_SETTING);
  }

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

  public focusOn(project: Project) {
    if (this.isInFocus(project)) {
      return;
    }
    const currentProjectsInFocus = this.settingsService.getArray(this.PROJECTS_IN_FOCUS_SETTING);
    currentProjectsInFocus.push(project.id);
    this.settingsService.setArray(this.PROJECTS_IN_FOCUS_SETTING, currentProjectsInFocus);
    this.projectsInFocusCache.push(project.id);
  }

  public removeFocusOn(project: Project) {
    if (!this.isInFocus(project)) {
      return;
    }
    const currentProjectsInFocus: string[] = this.settingsService.getArray(this.PROJECTS_IN_FOCUS_SETTING);
    currentProjectsInFocus.splice(currentProjectsInFocus.findIndex(anIdInFocus => project.id === anIdInFocus), 1);
    this.settingsService.setArray(this.PROJECTS_IN_FOCUS_SETTING, currentProjectsInFocus);
    this.projectsInFocusCache.splice(this.projectsInFocusCache.findIndex(anIdInFocus => project.id === anIdInFocus), 1);
  }

  public isInFocus(project: Project): boolean {
    return this.projectsInFocusCache.find(anIdInFocus => project.id === anIdInFocus) !== undefined;
  }
}

