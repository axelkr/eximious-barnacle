import { Component, OnInit } from '@angular/core';
import { HeijunkaBoard } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../heijunka-board.service';

@Component({
  selector: 'app-heijunka-board',
  templateUrl: './heijunka-board.component.html',
  styleUrls: ['./heijunka-board.component.less']
})
export class HeijunkaBoardComponent implements OnInit {
  heijunkaBoard: HeijunkaBoard;

  constructor(private heijunkaBoardService: HeijunkaBoardService) {
    this.heijunkaBoard = this.heijunkaBoardService.getHeijunkaBoard();
   }

  ngOnInit(): void {
  }
}
