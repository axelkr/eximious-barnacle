import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigate-to-setup',
  templateUrl: './navigate-to-setup.component.html'
})
export class NavigateToSetupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
