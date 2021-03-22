import { Component, OnInit, Input } from '@angular/core';
import { Project, State } from 'outstanding-barnacle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html'
})
export class TitleComponent implements OnInit {
  @Input() project: Project | undefined;
  @Input() state: State | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
