import { Component, OnInit } from '@angular/core';
import { HeijunkaBoardService } from '../heijunka-board.service';

@Component({
  selector: 'app-heijunka-board',
  templateUrl: './heijunka-board.component.html',
  styleUrls: ['./heijunka-board.component.less']
})
export class HeijunkaBoardComponent implements OnInit {
  constructor(public heijunkaBoardService: HeijunkaBoardService) {
   }

  ngOnInit(): void {
  }
}
