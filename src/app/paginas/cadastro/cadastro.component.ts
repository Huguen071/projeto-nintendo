import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule], // Adicione FormsModule aos imports
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  // Lógica do componente de cadastro aqui
  cadastrar() {
    // Implemente a lógica de cadastro aqui
    console.log('Tentativa de cadastro');
  }
}