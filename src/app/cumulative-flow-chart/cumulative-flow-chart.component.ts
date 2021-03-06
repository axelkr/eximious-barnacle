import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { Project, StateModel, State, LinearizeStateModelService, KanbanCard, StateTransition } from 'outstanding-barnacle';
import { ContextService } from '../domain-services/context.service';
import { KanbanCardService } from '../domain-services/kanban-card.service';
import { ProjectService } from '../domain-services/project.service';
import { StateModelService } from '../domain-services/state-model.service';
import { ColorizeStateModelService } from '../state-model/colorize-state-model.service';

import { CfdDataGenerator } from './CfdDataGenerator';
import { CumulativeFlowChart } from './CumulativeFlowChart';

@Component({
  selector: 'app-cumulative-flow-chart',
  templateUrl: './cumulative-flow-chart.component.html',
  styleUrls: ['./cumulative-flow-chart.component.less']
})
export class CumulativeFlowChartComponent implements AfterViewInit, OnDestroy {
  @Input() chartId: string | undefined;
  @Input() project: Project | undefined;
  showDataFrom: Date;
  showDataUntil: Date;

  private dataGenerator!: CfdDataGenerator;
  private d3Chart!: CumulativeFlowChart;

  constructor(private projectService: ProjectService, private colorizeStateModelService: ColorizeStateModelService,
    private kanbanCardService: KanbanCardService, private contextService: ContextService,
    private stateModelService: StateModelService) {
    const now = new Date();
    this.showDataFrom = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    this.showDataUntil = new Date(this.showDataFrom.getTime());
    this.showDataFrom.setDate(this.showDataFrom.getDate() - 28);
    contextService.onActiveContextsChanged(this.callbackOnActiveContextsChange);
  }

  ngOnDestroy(): void {
    this.contextService.offActiveContextsChanged(this.callbackOnActiveContextsChange);
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
    let kanbanCardsToChart = this.kanbanCardService.find({ project: this.project });
    const finalStates = this.projectService.getStateModel(this.project).finalStates();
    kanbanCardsToChart = this.excludeKanbanCardsInFinalStateSinceStart(this.showDataFrom, kanbanCardsToChart, finalStates);
    this.d3Chart.draw(this.dataGenerator.generateData(kanbanCardsToChart,
      [this.showDataFrom, this.showDataUntil]));
  }

  private reinitializeChart(): void {
    if (this.chartId === undefined || this.project === undefined) {
      return;
    }

    const stateModel = this.projectService.getStateModel(this.project);
    const mappingToColors = this.colorizeStateModelService.createColors(stateModel);
    const states = this.orderStatesFromFinalToBeginToOther(stateModel);
    const statesInFocus: State[] = [];
    states.forEach(aState => {
      if (this.stateModelService.isInFocus(aState)) {
        statesInFocus.push(aState);
      }
    }
    );
    this.dataGenerator = new CfdDataGenerator(states, statesInFocus);
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

  private excludeKanbanCardsInFinalStateSinceStart(start: Date, kanbanCards: KanbanCard[], finalStates: State[]): KanbanCard[] {
    return kanbanCards.filter(aCard => {
      const lastTransition: StateTransition | undefined = aCard.history.currentStateTransition();
      return lastTransition === undefined ||
        start < lastTransition.occurredAt ||
        !finalStates.some(aFinalState => aFinalState.id === lastTransition.state);
    });
  }

  // Angular doesn't recognize that changes to contexts has an impact on the cards to be drawn
  private callbackOnActiveContextsChange: () => void = () => { this.redraw(); };
}
