import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../servicos/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-profile-menu.component.html',
  styleUrls: ['./user-profile-menu.component.css']
})
export class UserProfileMenuComponent implements OnInit, OnDestroy {
  authService = inject(AuthService);
  isLoggedIn = false;
  isMenuOpen = false;
  private authSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.authSubscription = this.authService.isLoggedIn.subscribe(status => {
      this.isLoggedIn = status;
      // Fecha o menu se o estado de login mudar (ex: após o logout)
      this.isMenuOpen = false; 
    });
  }

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.authService.logout();
  }
}
