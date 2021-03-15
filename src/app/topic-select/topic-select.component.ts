import { Component, OnInit } from '@angular/core';
import { HeijunkaBoardService } from '../heijunka-board.service';

@Component({
  selector: 'app-topic-select',
  templateUrl: './topic-select.component.html',
  styleUrls: ['./topic-select.component.less']
})
export class TopicSelectComponent implements OnInit {

  constructor(public modelBoardService: HeijunkaBoardService) { }

  ngOnInit(): void {
  }

}
