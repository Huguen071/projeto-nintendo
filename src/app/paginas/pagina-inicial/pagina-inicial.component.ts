import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosHistoricosService } from '../../servicos/dados-historicos.service';
import { animacaoSlideIn } from '../../animacoes';
import { CardEventoComponente } from "../../components/card-evento/card-evento.component";
import { EventoHistorico } from '../../modelos/evento-historico';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagina-inicial',
  imports: [CommonModule, CardEventoComponente, CardEventoComponente, FormsModule],
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [animacaoSlideIn]
})
export class PaginaInicialComponente implements OnInit {
  private dadosHistoricosService = inject(DadosHistoricosService);
  todosEventos: EventoHistorico[] = [];
  historiaFiltrada: EventoHistorico[] = [];
  termoBusca: string = '';
  eventoSelecionado: EventoHistorico | null = null;

  ngOnInit(): void {
    this.todosEventos = this.dadosHistoricosService.getEventos()();
    this.aplicarFiltrosEOrdenar();
  }

  aplicarFiltrosEOrdenar(): void {
    let resultado = this.todosEventos;

    if (this.termoBusca) {
      const buscaEmMinusculo = this.termoBusca.toLowerCase();
      resultado = resultado.filter(evento =>
        evento.titulo.toLowerCase().includes(buscaEmMinusculo) ||
        evento.descricao.toLowerCase().includes(buscaEmMinusculo)
      );
    }

    this.historiaFiltrada = resultado;
  }

  selecionarEvento(evento: EventoHistorico): void {
    this.eventoSelecionado = evento;
  }

  fecharDetalhes(): void {
    this.eventoSelecionado = null;
  }
}