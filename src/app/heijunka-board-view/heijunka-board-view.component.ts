import { Component, OnInit } from '@angular/core';
import { HeijunkaBoardService } from '../heijunka-board.service';

@Component({
  selector: 'app-heijunka-board-view',
  templateUrl: './heijunka-board-view.component.html',
  styleUrls: ['./heijunka-board-view.component.less']
})
export class HeijunkaBoardViewComponent implements OnInit {
  constructor(public heijunkaBoardService: HeijunkaBoardService) {
  }

  ngOnInit(): void {
  }
}
