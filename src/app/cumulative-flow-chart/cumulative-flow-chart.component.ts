import { AfterViewInit, Component, Input } from '@angular/core';
import { Project, StateModel, State, LinearizeStateModelService } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../domain-services/heijunka-board.service';
import { KanbanCardService } from '../domain-services/kanban-card.service';
import { ColorizeStateModelService } from '../state-model/colorize-state-model.service';

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
  showDataFrom: Date;
  showDataUntil: Date;
  displayFinalStates = false;

  private dataGenerator!: CfdDataGenerator;
  private d3Chart!: CumulativeFlowChart;

  constructor(private heijunkaBoardService: HeijunkaBoardService, private colorizeStateModelService: ColorizeStateModelService,
    private kanbanCardService: KanbanCardService) {
    const now = new Date();
    this.showDataFrom = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    this.showDataUntil = new Date(this.showDataFrom.getTime());
    this.showDataFrom.setDate(this.showDataFrom.getDate() - 14);
  }

  ngAfterViewInit(): void {
    this.reinitializeChart();
  }

  onShowDataFromSelected(event: any) {
    this.updateDateRange(event.value, this.showDataUntil);
    this.redraw();
  }

  onShowDataUntilSelected(event: any) {
    this.updateDateRange(this.showDataFrom, event.value);
    this.redraw();
  }

  selectedDisplayFinalStates(event: any) {
    this.displayFinalStates = (event.target.value as string) === 'true';
    this.redraw();
  }

  private updateDateRange(showFrom: Date, showUntil: Date) {
    const validDateRange = showFrom < showUntil;
    if (!validDateRange) {
      return;
    }
    this.showDataFrom = showFrom;
    this.showDataUntil = showUntil;
  }

  private redraw(): void {
    if (this.project === undefined) {
      return;
    }
    const kanbanCardsToChart = this.kanbanCardService.projectsKanbanCard(this.project);
    this.d3Chart.draw(this.dataGenerator.generateData(kanbanCardsToChart,
      [this.showDataFrom, this.showDataUntil], this.displayFinalStates));
  }

  private reinitializeChart(): void {
    if (this.chartId === undefined || this.project === undefined) {
      return;
    }

    const stateModel = this.heijunkaBoardService.getDomainModel().stateModels.get(this.project.id);
    const mappingToColors = this.colorizeStateModelService.createColors(stateModel);
    const states = this.orderStatesFromFinalToBeginToOther(stateModel);
    this.dataGenerator = new CfdDataGenerator(states, stateModel);
    this.d3Chart = new CumulativeFlowChart(mappingToColors);

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
