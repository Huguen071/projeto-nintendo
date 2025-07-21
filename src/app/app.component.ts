import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { dadosHistoriaNintendo, EventoHistorico } from './historia-nintendo.dados';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  titulo = 'A História da Nintendo';

  // Propriedades para controlar o estado dos filtros
  filtroAtivo: string = 'Todos';
  termoBusca: string = '';
  ordemClassificacao: 'asc' | 'desc' = 'asc';

  // Listas de dados
  private todaHistoria: EventoHistorico[] = []; // Guarda todos os eventos originais
  historiaFiltrada: EventoHistorico[] = []; // A lista que será exibida na tela
  categorias: string[] = []; // Lista de categorias únicas para os botões

  ngOnInit(): void {
    this.todaHistoria = dadosHistoriaNintendo;
    // Cria uma lista de categorias únicas (sem repetição)
    this.categorias = [...new Set(this.todaHistoria.map(item => item.categoria))];
    this.aplicarFiltrosEOrdenar();
  }
  aplicarFiltrosEOrdenar() {
    let resultado = this.todaHistoria;

    // 1. Lógica de filtro por categoria
    if (this.filtroAtivo !== 'Todos') {
      resultado = resultado.filter(evento => evento.categoria === this.filtroAtivo);
  }
 
    // 2. Lógica de filtro por termo de pesquisa
    if (this.termoBusca) {
      const buscaEmMinusculo = this.termoBusca.toLowerCase();
      resultado = resultado.filter(evento => 
        evento.titulo.toLowerCase().includes(buscaEmMinusculo) ||
        evento.descricao.toLowerCase().includes(buscaEmMinusculo)
      );
    }

    // 3. Lógica de ordenação
    resultado.sort((a, b) => {
      if (this.ordemClassificacao === 'asc') {
        return a.ano - b.ano;
      } else {
        return b.ano - a.ano;
      }
    });

    // Atualiza a lista filtrada
    this.historiaFiltrada = resultado;

    

  }
}
