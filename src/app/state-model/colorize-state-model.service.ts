import { Injectable } from '@angular/core';
import { State, StateModel, LinearizeStateModelService } from 'outstanding-barnacle';
import { StateModelService } from '../domain-services/state-model.service';

export type StateToColor = Map<State, string>;

@Injectable({
  providedIn: 'root'
})
// Stable mapping from a state to colors. Each time, a state should be mapped to the same color.
export class ColorizeStateModelService {
  private readonly allColors: string[] = ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#999999'];

  constructor(private stateModelService: StateModelService) { }

  public createColors(stateModel: StateModel): StateToColor {
    const result = new Map<State, string>();
    const grey = '#cccccc';
    const statesToColor = new LinearizeStateModelService().linearize(stateModel);
    statesToColor.forEach((aState, index) => {
      const color = this.stateModelService.isInFocus(aState) ? this.allColors[index % this.allColors.length] : grey;
      result.set(aState, color);
    });
    return result;
  }
}
