// src/app/servicos/news.service.ts

import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GNewsResponse } from '../modelos/noticia';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private http = inject(HttpClient);
  private apiKey = '99bea1632c5fbf30801b19f1ad288847'; // <-- COLOQUE SUA CHAVE AQUI
  private apiUrl = 'https://gnews.io/api/v4/search';

  getNintendoNews(): Observable<GNewsResponse> {
    // Busca notícias com "Nintendo" no título, em português e do Brasil
    const params = {
      q: 'Nintendo',
      lang: 'pt',
      country: 'br',
      in: 'title',
      apikey: this.apiKey
    };

    return this.http.get<GNewsResponse>(this.apiUrl, { params });
  }
}