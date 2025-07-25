import { Routes } from '@angular/router';
import { PaginaInicialComponente } from './paginas/pagina-inicial/pagina-inicial.component';
import { LoginComponent } from './paginas/paginas/login/login.component';
import { HomeComponent } from './paginas/home/home.component';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';

export const routes: Routes = [

     { path: '', redirectTo: 'home', pathMatch: 'full' },
     { path: 'cadastro', component: CadastroComponent },
     { path: 'home', component: HomeComponent },
     { path: 'login', component: LoginComponent },
     { path: 'pagina-inicial', component: PaginaInicialComponente },
     { path: 'pagina-inicial', component: PaginaInicialComponente },
     { path: '**', redirectTo: 'home' }
];
