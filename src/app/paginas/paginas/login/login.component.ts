import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../servicos/auth.service';
import { User } from '../../../modelos/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = {};

  constructor(private authService: AuthService) { }

  login() {
    if (this.user.username && this.user.password) {
      this.authService.login(this.user);
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
}