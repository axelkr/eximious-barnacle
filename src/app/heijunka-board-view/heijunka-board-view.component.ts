import { Component, OnInit } from '@angular/core';
import { HeijunkaBoardService } from '../domain-services/heijunka-board.service';
import { ProjectService } from '../domain-services/project.service';
import { TopicService } from '../domain-services/topic.service';

@Component({
  selector: 'app-heijunka-board-view',
  templateUrl: './heijunka-board-view.component.html',
  styleUrls: ['./heijunka-board-view.component.less']
})
export class HeijunkaBoardViewComponent implements OnInit {
  constructor(public heijunkaBoardService: HeijunkaBoardService, public projectService: ProjectService, public topicService: TopicService) {
  }

  ngOnInit(): void {
  }
}
