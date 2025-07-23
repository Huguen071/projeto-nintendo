import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { EventoHistorico } from '../../modelos/evento-historico';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-card-evento',
  imports: [NgOptimizedImage],
  templateUrl: './card-evento.component.html',
  styleUrls: ['./card-evento.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardEventoComponente {
  evento = input.required<EventoHistorico>();

  abrirImagemOriginal(): void {
    const url = this.evento().imagem; // Pega o URL da imagem do evento
    if (url) {
      window.open(url, '_blank'); // Abre o URL numa nova aba do navegador
    }
  }
}
