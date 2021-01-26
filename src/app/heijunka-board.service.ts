import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';

import { HeijunkaBoard, Project } from 'outstanding-barnacle';

@Injectable({
  providedIn: 'root'
})
export class HeijunkaBoardService {
  private board: HeijunkaBoard = HeijunkaBoard.createEmptyHeijunkaBoard();

  constructor() {
    this.board = this.board.addProject(new Project('id','project1',new Date())).addProject(new Project('id2','project2',new Date()));
  }

  getHeijunkaBoard(): HeijunkaBoard {
    return this.board;
  }
}
