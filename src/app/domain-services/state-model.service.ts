import { Injectable } from '@angular/core';

import { StateModel } from 'outstanding-barnacle';
import { HeijunkaBoardService } from '../domain-services/heijunka-board.service';

@Injectable({
  providedIn: 'root'
})
export class StateModelService {

  constructor(private modelBoardService: HeijunkaBoardService) { }
}
