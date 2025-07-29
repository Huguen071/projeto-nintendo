import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../servicos/auth.service';

@Component({
  selector: 'app-user-profile-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-profile-menu.component.html',
  styleUrls: ['./user-profile-menu.component.css']
})
export class UserProfileMenuComponent {
  authService = inject(AuthService);
  isLoggedIn$ = this.authService.isLoggedIn; // Mantenha apenas esta linha para o status de login
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.authService.logout();
    this.isMenuOpen = false; // Fecha o menu ao fazer logout
  }
}