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
}
