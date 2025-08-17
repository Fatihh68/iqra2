import { bootstrapApplication } from '@angular/platform-browser';
import { APP_ID } from '@angular/core';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = () =>
  bootstrapApplication(AppComponent, {
    ...config,
    providers: [
      ...(config.providers ?? []),
      // Must match the client APP_ID
      { provide: APP_ID, useValue: 'serverApp' },
    ],
  });

export default bootstrap;
