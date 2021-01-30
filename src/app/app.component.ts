import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppConfig } from './app.config';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public constructor(private titleService: Title,private configuration: AppConfig) {
    titleService.setTitle(AppConfig.settings.title);
   }
}
