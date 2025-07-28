import { Routes } from '@angular/router';
import { PaginaInicialComponente } from './paginas/pagina-inicial/pagina-inicial.component';
import { LoginComponent } from './paginas/login/login.component';
import { HomeComponent } from './paginas/home/home.component';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';
import { NovidadesComponent } from './paginas/novidades/novidades.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { NotificacoesComponent } from './paginas/notificacoes/notificacoes.component';
import { LogoutComponent } from './paginas/logout/logout.component';

export const routes: Routes = [

     { path: 'novidades', component: NovidadesComponent },
     { path: '', redirectTo: 'home', pathMatch: 'full' },
     { path: 'cadastro', component: CadastroComponent },
     { path: 'home', component: HomeComponent },
     { path: 'login', component: LoginComponent },
     { path: 'pagina-inicial', component: PaginaInicialComponente },
     { path: 'perfil', component: PerfilComponent },
     { path: 'notificacoes', component: NotificacoesComponent },
     { path: 'logout', component: LogoutComponent },
     { path: '**', redirectTo: 'home' }
];
