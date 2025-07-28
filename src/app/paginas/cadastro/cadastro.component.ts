import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../servicos/auth.service';
import { User } from '../../modelos/user';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  user: User = {};
  lgpdAccepted: boolean = false;

  constructor(private authService: AuthService) {}

  cadastrar() {
    if (!this.lgpdAccepted) {
      alert('Você precisa aceitar os termos de uso e a política de privacidade.');
      return;
    }
    this.authService.register(this.user);
  }
}
