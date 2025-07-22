import { Routes } from '@angular/router';
import { PaginaInicialComponente } from './paginas/pagina-inicial/pagina-inicial.component';
import { LoginComponent } from './paginas/paginas/login/login.component';
// If your file is named 'login.component.ts' and located in 'src/app/paginas/login/', this import is correct.
// Otherwise, update the path and filename to match the actual location, for example:
// import { LoginComponent } from './paginas/login/Login.component';
// import { LoginComponent } from './paginas/login/loginComponent';
// import { LoginComponent } from './paginas/login/login.component.ts';

export const routes: Routes = [
     { path: 'login', component: LoginComponent },
     { path: 'pagina-inicial', component: PaginaInicialComponente },
     { path: '', component: PaginaInicialComponente }
];
