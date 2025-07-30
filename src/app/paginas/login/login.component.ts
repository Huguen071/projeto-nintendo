import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../servicos/auth.service';
import { User } from '../../modelos/user';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {};
  rememberMe: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      this.user.email = rememberedEmail;
      this.rememberMe = true;
    }
  }

  login() {
    this.authService.login(this.user);
    if (this.rememberMe) {
      localStorage.setItem('rememberedEmail', this.user.email || '');
    } else {
      localStorage.removeItem('rememberedEmail');
    }
  }

  esqueciSenha() {
    if (!this.user.email) {
      alert('Por favor, digite seu e-mail para redefinir a senha.');
      return;
    }
    this.authService.sendPasswordResetEmail(this.user.email);
  }
}
