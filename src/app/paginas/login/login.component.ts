import { Component, OnInit } from '@angular/core'; // Adicione OnInit
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
export class LoginComponent implements OnInit { // Implemente OnInit
  user: User = {};
  rememberMe: boolean = false; // Propriedade para o checkbox

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // Ao iniciar o componente, verifica se há um usuário salvo no localStorage
    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser) {
      console.log('Usuário salvo encontrado. Preenchendo formulário.');
      this.user.username = JSON.parse(rememberedUser).username;
      // Por segurança, geralmente não preenchemos a senha automaticamente.
      // this.user.password = JSON.parse(rememberedUser).password;
      this.rememberMe = true;
    }
  }

  login() {
    // Tentativa de login através do serviço de autenticação
    if (this.authService.login(this.user)) {
      // Se o login for bem-sucedido:
      if (this.rememberMe) {
        // E "Lembrar de mim" estiver marcado, salva o nome de usuário.
        console.log('Salvando usuário para próxima visita.');
        localStorage.setItem('rememberedUser', JSON.stringify({ username: this.user.username }));
      } else {
        // Se não estiver marcado, remove qualquer usuário que possa estar salvo.
        console.log('Removendo usuário salvo.');
        localStorage.removeItem('rememberedUser');
      }
    } else {
      // Se o login falhar, você pode limpar o campo de senha
      this.user.password = '';
    }
  }
}
