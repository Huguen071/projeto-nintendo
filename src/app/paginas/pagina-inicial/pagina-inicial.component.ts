import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosHistoricosService } from '../../servicos/dados-historicos.service';
import { animacaoSlideIn } from '../../animacoes';
import { CardEventoComponente } from "../../components/card-evento/card-evento.component";

@Component({
  selector: 'app-pagina-inicial',
  imports: [CommonModule, CardEventoComponente, CardEventoComponente],
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [animacaoSlideIn]
})
export class PaginaInicialComponente {
  private dadosHistoricosService = inject(DadosHistoricosService);
  eventos = this.dadosHistoricosService.getEventos();
}
