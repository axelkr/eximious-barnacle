import { Component, OnInit } from '@angular/core';
import { ContextService } from '../../domain-services/context.service';

@Component({
  selector: 'app-context-create',
  templateUrl: './context-create.component.html'
})
export class ContextCreateComponent implements OnInit {
  model: { name: string } = { name: '' };

  constructor(public contextService: ContextService) { }

  ngOnInit(): void {
  }

  createContext(): void {
    const isDoubleSubmit = (this.model.name === null || this.model.name.length === 0);
    if (isDoubleSubmit) {
      return;
    }
    this.contextService.create(this.model.name);
  }
}
