import { AfterViewInit, Component, Input } from '@angular/core';
import { Project, StateModel, State, LinearizeStateModelService } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../heijunka-board.service';

import { CfdDataGenerator } from './CfdDataGenerator';
import { CumulativeFlowChart } from './CumulativeFlowChart';

@Component({
  selector: 'app-cumulative-flow-chart',
  templateUrl: './cumulative-flow-chart.component.html',
  styleUrls: ['./cumulative-flow-chart.component.less']
})
export class CumulativeFlowChartComponent implements AfterViewInit {
  @Input() chartId: string | undefined;
  @Input() project: Project | undefined;
  readonly showDataFrom : Date;
  readonly showDataUntil: Date;

  private dataGenerator!: CfdDataGenerator;
  private d3Chart!: CumulativeFlowChart;

  constructor(private heijunkaBoardService: HeijunkaBoardService) {
    const now = new Date();
    this.showDataFrom = new Date(now.getFullYear(), now.getMonth(), now.getDate(),23,59,59);
    this.showDataUntil = new Date( this.showDataFrom.getTime());
    this.showDataFrom.setDate( this.showDataFrom.getDate() - 14);
  }

  ngAfterViewInit(): void {
    this.reinitializeChart();
  }

  private redraw(): void {
    const kanbanCardsToChart = this.heijunkaBoardService.getKanbanCards().find({ project: this.project });
    this.d3Chart.draw(this.dataGenerator.generateData(kanbanCardsToChart, [this.showDataFrom,this.showDataUntil]));
  }

  private reinitializeChart(): void {
    if (this.chartId === undefined || this.project === undefined) {
      return;
    }

    const stateModel = this.heijunkaBoardService.getDomainModel().getStateModelOf(this.project);
    const states = this.orderStatesFromFinalToBeginToOther(stateModel);
    this.dataGenerator = new CfdDataGenerator(states);
    this.d3Chart = new CumulativeFlowChart(stateModel);

    this.d3Chart.init(this.chartId);
    this.redraw();
  }

  private orderStatesFromFinalToBeginToOther(stateModel: StateModel): State[] {
    const result: State[] = new LinearizeStateModelService().linearize(stateModel);
    const finalStates = stateModel.finalStates();
    finalStates.forEach(aFinalState => {
      if (aFinalState === stateModel.initialState()) {
        return;
      }
      const indexOfFinalState = result.findIndex(a => a === aFinalState);
      if (indexOfFinalState > 0) {
        result.splice(indexOfFinalState, 1);
        result.unshift(aFinalState);
      }
    });

    return result;
  }
}
