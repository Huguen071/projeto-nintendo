import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../modelos/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn = this.loggedIn.asObservable();

  constructor(private router: Router) {
    const token = localStorage.getItem('user');
    if (token) {
      this.loggedIn.next(true);
    }
  }

  register(user: User) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Cadastro realizado com sucesso!');
    this.router.navigate(['/login']);
  }

  login(user: User): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find((u: User) => u.username === user.username && u.password === user.password);
    if (foundUser) {
      localStorage.setItem('user', JSON.stringify(foundUser));
      this.loggedIn.next(true);
      this.router.navigate(['/pagina-inicial']);
      return true;
    }
    alert('Usuário ou senha inválidos!');
    return false;
  }

  logout() {
    localStorage.removeItem('user');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}