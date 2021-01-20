import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../model/task';

@Component({
  selector: 'app-state-selection',
  templateUrl: './state-selection.component.html',
  styleUrls: ['./state-selection.component.less']
})
export class StateSelectionComponent implements OnInit {
  @Input() task: Task | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
