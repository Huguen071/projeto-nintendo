import { bootstrapApplication } from '@angular/platform-browser';
import { aplicativoConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, aplicativoConfig)
  .catch((err) => console.error(err));
