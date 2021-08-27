import { State } from 'outstanding-barnacle';

export class MockStateModelService {
    public returnValueIsInFocus = true;

    public isInFocus(state: State | string): boolean {
        return this.returnValueIsInFocus;
    }
}
