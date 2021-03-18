import { State, StateModel, LinearizeStateModelService } from "outstanding-barnacle";

// Stable mapping from a state to colors. Each time, a state should be mapped to the same color.
export class ColorModel {
    private readonly allColors: string[] = ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'];

    public createColors(stateModel: StateModel): Map<State, string> {
        const result = new Map<State, string>();
        const statesToColor = new LinearizeStateModelService().linearize(stateModel);
        statesToColor.forEach((aState, index) => {
            result.set(aState, this.allColors[index % this.allColors.length]);
        })
        return result;
    }
}