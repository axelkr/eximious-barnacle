import { Component, OnInit } from '@angular/core';
import { ContextService } from '../../domain-services/context.service';
import { Context } from 'outstanding-barnacle';

@Component({
  selector: 'app-context-select',
  templateUrl: './context-select.component.html'
})
export class ContextSelectComponent implements OnInit {
  displayContextSelection = true;

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
    let description = '';
    this.contextService.availableContexts().forEach(aContext => {
      if (this.contextService.isExplicitlyActive(aContext)) {
        description += aContext.name + ', ';
      }
    });
    if (description.length === 0) {
      return '(all)';
    }
    // drop trailing ', ';
    return description.substr(0, description.length - 2);
  }
}
