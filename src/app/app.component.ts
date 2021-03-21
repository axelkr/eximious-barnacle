import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppConfig } from './backend/app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public constructor(private titleService: Title, private configuration: AppConfig) {
    if (AppConfig.settings !== undefined) {
      titleService.setTitle(AppConfig.settings.title);
    }
  }
}
