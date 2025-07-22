import { Routes } from '@angular/router';
import { PaginaInicialComponente } from './paginas/pagina-inicial/pagina-inicial.component';
import { LoginComponent } from './paginas/paginas/login/login.component';
import { HomeComponent } from './paginas/home/home.component';

export const routes: Routes = [

     { path: 'home', component: HomeComponent },
     { path: 'login', component: LoginComponent },
     { path: 'pagina-inicial', component: PaginaInicialComponente },
     { path: '', component: PaginaInicialComponente }
];
