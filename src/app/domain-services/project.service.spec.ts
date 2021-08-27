import { Project } from 'outstanding-barnacle';

export class MockProjectService {
    public returnValueIsInFocus = true;

    public availableProjects(): Project[] {
        return [];
    }

    public isInFocus(project: Project | string): boolean {
        return this.returnValueIsInFocus;
    }
}
