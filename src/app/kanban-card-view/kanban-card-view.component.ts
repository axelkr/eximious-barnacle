import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeijunkaBoardService } from '../heijunka-board.service';

@Component({
  selector: 'app-kanban-card-view',
  templateUrl: './kanban-card-view.component.html',
  styleUrls: ['./kanban-card-view.component.less']
})
export class KanbanCardViewComponent implements OnInit {
  @Input() id: string | undefined;

  constructor(private router: Router, private route: ActivatedRoute, public heijunkaBoardService: HeijunkaBoardService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params.id !== undefined) {
        this.id = params.id;
      }
    });
  }

}
