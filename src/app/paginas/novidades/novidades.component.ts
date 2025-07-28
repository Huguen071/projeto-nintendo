import { Component, inject } from '@angular/core';
import { AuthService } from '../../servicos/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-novidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './novidades.component.html',
  styleUrl: './novidades.component.css'
})
export class NovidadesComponent {
  authService = inject(AuthService);
  isLoggedIn$ = this.authService.isLoggedIn;

  inscrever() {
    this.authService.inscreverParaNotificacoes();
  }
}
