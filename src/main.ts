import { bootstrapApplication } from '@angular/platform-browser';
import { APP_ID } from '@angular/core';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers ?? []),
    // Replaces BrowserModule.withServerTransition({ appId: 'serverApp' })
    { provide: APP_ID, useValue: 'serverApp' },
  ],
}).catch(err => console.error(err));
