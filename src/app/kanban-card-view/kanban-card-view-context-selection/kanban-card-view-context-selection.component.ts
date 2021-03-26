import { Component, OnInit, Input } from '@angular/core';
import { ContextService } from '../../domain-services/context.service';
import { KanbanCard , Context} from 'outstanding-barnacle';

@Component({
  selector: 'app-kanban-card-view-context-selection',
  templateUrl: './kanban-card-view-context-selection.component.html'
})
export class KanbanCardViewContextSelectionComponent implements OnInit {
  @Input() kanbanCard: KanbanCard | undefined;
  displayContextSelection = true;

  constructor(public contextService: ContextService) { }

  ngOnInit(): void {
  }

  public onChange(context: Context, event: any) {
    if ( this.kanbanCard === undefined) {
      return;
    }
    const isChecked: boolean = event.target.checked;
    if (isChecked) {
      this.contextService.set(this.kanbanCard, context);
    } else {
      this.contextService.unset(this.kanbanCard,context);
    }
  }

  public describeSelectedContexts(): string {
    if ( this.kanbanCard === undefined) {
      return '';
    }
    let description = '';
    const kanbanCardId = this.kanbanCard.id;
    this.contextService.availableContexts().forEach(aContext => {
      if (this.contextService.isIdActiveInContext(kanbanCardId,aContext)) {
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
