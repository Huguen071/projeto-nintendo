import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { routes } from './app.routes';
import { firebaseConfig } from '../environments/firebase-config';
import { AuthService } from './servicos/auth.service';

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const aplicativoConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    // Forneça a instância do AuthService
    AuthService
  ]
};
