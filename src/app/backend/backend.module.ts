import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppConfig } from './app.config';

const initializeApp = (appConfig: AppConfig) => () => appConfig.load();

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfig], multi: true
    }]
})
export class BackendModule { }
