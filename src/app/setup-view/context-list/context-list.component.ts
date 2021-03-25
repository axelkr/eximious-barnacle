import { Component, OnInit } from '@angular/core';
import { ContextService } from '../../domain-services/context.service';

@Component({
  selector: 'app-context-list',
  templateUrl: './context-list.component.html'
})
export class ContextListComponent implements OnInit {

  constructor(public contextService: ContextService) { }

  ngOnInit(): void {
  }

}
