import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: '<p>Saindo...</p>',
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Aqui você pode adicionar a lógica para deslogar o usuário, como limpar tokens, etc.
    console.log('Usuário deslogado.');
    // Redirecionar para a página de login ou página inicial após o logout
    this.router.navigate(['/login']);
  }
}
