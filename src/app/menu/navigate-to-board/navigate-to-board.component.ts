import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigate-to-board',
  templateUrl: './navigate-to-board.component.html'
})
export class NavigateToBoardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
