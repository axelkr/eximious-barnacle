import { Component, OnInit } from '@angular/core';
import { TopicService } from '../domain-services/topic.service';

@Component({
  selector: 'app-setup-view',
  templateUrl: './setup-view.component.html'
})
export class SetupViewComponent implements OnInit {

  constructor(public topicService: TopicService) { }

  ngOnInit(): void {
  }

}
