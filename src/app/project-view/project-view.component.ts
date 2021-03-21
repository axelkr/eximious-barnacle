import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeijunkaBoardService } from '../heijunka-board.service';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.less']
})
export class ProjectViewComponent implements OnInit {
  @Input() project: string | undefined;

  constructor(private router: Router, private route: ActivatedRoute, public heijunkaBoardService: HeijunkaBoardService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params.project !== undefined) {
        this.project = params.project;
      }
    });
  }

}
