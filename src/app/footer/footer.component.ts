import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // Esta propriedade irá controlar se a classe 'hidden' é aplicada.
  public isDismissed: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // Adicionei um log para sabermos que o componente iniciou
    console.log('FooterComponent iniciado.');
    // Verifica no localStorage se o rodapé já foi dispensado anteriormente
    if (localStorage.getItem('footerDismissed') === 'true') {
      console.log('Rodapé já estava dispensado. Mantendo escondido.');
      this.isDismissed = true;
    } else {
      console.log('Rodapé está visível.');
    }
  }

  // Função chamada pelo (change) do checkbox
  public dismissFooter(): void {
    console.log('Checkbox clicado! Escondendo rodapé e salvando escolha.');
    this.isDismissed = true;
    localStorage.setItem('footerDismissed', 'true');
  }
}