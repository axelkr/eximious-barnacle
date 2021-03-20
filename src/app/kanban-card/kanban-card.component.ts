import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeijunkaBoardService } from '../heijunka-board.service';

@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.less']
})
export class KanbanCardComponent implements OnInit {
  @Input() project: string | undefined;
  @Input() kanbanCard: string | undefined;

  constructor(private router: Router, private route: ActivatedRoute, public heijunkaBoardService: HeijunkaBoardService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params.project !== undefined) {
        this.project = params.project;
      }
      if (params.kanbanCard !== undefined) {
        this.kanbanCard = params.kanbanCard;
      }
    });
  }

}
