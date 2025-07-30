// src/app/paginas/novidades/novidades.component.ts

import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsService } from '../../servicos/news.service';
import { Noticia } from '../../modelos/noticia';

@Component({
  selector: 'app-novidades',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './novidades.component.html',
  styleUrls: ['./novidades.component.css']
})
export class NovidadesComponent implements OnInit {
  private newsService = inject(NewsService);
  
  // Usando signals para reatividade
  noticias = signal<Noticia[]>([]);
  carregando = signal<boolean>(true);
  erro = signal<string | null>(null);

  ngOnInit(): void {
    this.carregarNoticias();
  }

  carregarNoticias(): void {
    this.carregando.set(true);
    this.erro.set(null);
    this.newsService.getNintendoNews().subscribe({
      next: (resposta) => {
        this.noticias.set(resposta.articles);
        this.carregando.set(false);
      },
      error: (err) => {
        console.error('Erro ao buscar notícias:', err);
        this.erro.set('Não foi possível carregar as notícias. Tente novamente mais tarde.');
        this.carregando.set(false);
      }
    });
  }
}