import { Component, OnInit } from '@angular/core';
import { ContextService } from '../../domain-services/context.service';
import { Context } from 'outstanding-barnacle';

@Component({
  selector: 'app-context-select',
  templateUrl: './context-select.component.html'
})
export class ContextSelectComponent implements OnInit {
  displayContextSelection = false;

  constructor(public contextService: ContextService) { }

  ngOnInit(): void {
  }

  public onChange(context: Context, event: any) {
    const isChecked: boolean = event.target.checked;
    if (isChecked) {
      this.contextService.activate(context);
    } else {
      this.contextService.deactivate(context);
    }
  }

  public describeActiveContexts(): string {
    const explicitlyActiveContexts: Context[] = this.contextService.availableContexts()
      .filter(aContext => this.contextService.isExplicitlyActive(aContext));
    return this.contextService.describeContexts(explicitlyActiveContexts, '(all)');
  }
}
