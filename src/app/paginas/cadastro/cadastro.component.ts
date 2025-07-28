import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule
import { AuthService } from '../../servicos/auth.service';
import { User } from '../../modelos/user';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // Adicione FormsModule e RouterModule aos imports
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  user: User = {};
  lgpdAccepted: boolean = false;

  constructor(private authService: AuthService) {}

  cadastrar() {
    if (this.user.username && this.user.email && this.user.password) {
      this.authService.register(this.user);
      return;
    }
    console.log('Tentativa de cadastro');
  }
}
