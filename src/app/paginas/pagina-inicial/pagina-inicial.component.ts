import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { CardEventoComponent } from '../../components/card-evento/card-evento.component';
import { animacaoSlideIn } from '../../animacoes';
import { EventoHistorico } from '../../modelos/evento-historico';
import { FormsModule } from '@angular/forms';
import { DadosHistoricosService } from '../../servicos/dados-historicos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina-inicial',
  standalone: true,
  imports: [CardEventoComponent, FormsModule, CommonModule],
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
  imagemAtualIndex = signal(0);

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
    this.imagemAtualIndex.set(0);
  }

  fecharDetalhes(): void {
    this.eventoSelecionado = null;
  }

  proximaImagem() {
    if (this.eventoSelecionado) {
      this.imagemAtualIndex.update(
        (i) => (i + 1) % this.eventoSelecionado!.imagem.length
      );
    }
  }

  imagemAnterior() {
    if (this.eventoSelecionado) {
      this.imagemAtualIndex.update(
        (i) =>
          (i - 1 + this.eventoSelecionado!.imagem.length) %
          this.eventoSelecionado!.imagem.length
      );
    }
  }
}
