import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeijunkaBoardService } from '../domain-services/heijunka-board.service';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.less']
})
export class ProjectViewComponent implements OnInit {
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
