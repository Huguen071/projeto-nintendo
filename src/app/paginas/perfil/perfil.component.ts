import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../servicos/auth.service';
import { User } from '../../modelos/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  authService = inject(AuthService);
  user: User | null = null;
  
  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.user = user;
    });
  }

  salvarPerfil() {
    // A lógica para salvar o perfil será implementada aqui.
    alert('Perfil salvo com sucesso!');
  }
}
