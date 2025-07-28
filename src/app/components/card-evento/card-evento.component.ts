import { ChangeDetectionStrategy, Component, input, signal, OnInit, OnDestroy } from '@angular/core';
import { EventoHistorico } from '../../modelos/evento-historico';

@Component({
  selector: 'app-card-evento',
  standalone: true,
  imports: [],
  templateUrl: './card-evento.component.html',
  styleUrls: ['./card-evento.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardEventoComponent implements OnInit, OnDestroy {
  evento = input.required<EventoHistorico>();

  imagemAtualIndex = signal(0);
  intervalo: any;

  ngOnInit() {
    this.iniciarCarrossel();
  }

  ngOnDestroy() {
    this.limparIntervalo();
  }

  iniciarCarrossel() {
    this.intervalo = setInterval(() => {
      this.proximaImagem();
    }, 3000);
  }

  proximaImagem() {
    this.imagemAtualIndex.update(
      (i) => (i + 1) % this.evento().imagem.length
    );
    this.reiniciarCarrossel();
  }

  imagemAnterior() {
    this.imagemAtualIndex.update(
      (i) =>
        (i - 1 + this.evento().imagem.length) % this.evento().imagem.length
    );
    this.reiniciarCarrossel();
  }

  limparIntervalo() {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }

  reiniciarCarrossel() {
    this.limparIntervalo();
    this.iniciarCarrossel();
  }
}
