import { Component, OnInit } from '@angular/core';
import { ContextService } from '../../domain-services/context.service';
import { Context } from 'outstanding-barnacle';

@Component({
  selector: 'app-context-select',
  templateUrl: './context-select.component.html'
})
export class ContextSelectComponent implements OnInit {

  constructor(public contextService: ContextService) { }

  ngOnInit(): void {
  }

  public submit() {
    // ignored
  }

  public onChange(context: Context, event: any) {
    const isChecked: boolean = event.target.value;
    if (isChecked) {
      this.contextService.activate(context);
    } else {
      this.contextService.deactivate(context);
    }
  }
}
