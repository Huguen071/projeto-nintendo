import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { EventoHistorico } from '../../modelos/evento-historico';

@Component({
  selector: 'app-card-evento',
  standalone: true,
  imports: [],
  templateUrl: './card-evento.component.html',
  styleUrls: ['./card-evento.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardEventoComponent {
  evento = input.required<EventoHistorico>();

  imagemAtualIndex = signal(0);

  proximaImagem() {
    this.imagemAtualIndex.update(
      (i) => (i + 1) % this.evento().imagem.length
    );
  }

  imagemAnterior() {
    this.imagemAtualIndex.update(
      (i) =>
        (i - 1 + this.evento().imagem.length) % this.evento().imagem.length
    );
  }
}
