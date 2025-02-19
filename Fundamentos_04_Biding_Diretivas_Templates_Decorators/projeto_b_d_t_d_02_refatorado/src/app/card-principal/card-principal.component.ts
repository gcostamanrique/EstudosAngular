import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PainelPrincipalComponent } from '../painel-principal/painel-principal.component';
import { BotaoPrincipalComponent } from '../botao-principal/botao-principal.component';
import { InputPrincipalComponent } from '../input-principal/input-principal.component';

@Component({
  selector: 'app-card-principal',
  imports: [
    PainelPrincipalComponent,
    BotaoPrincipalComponent,
    InputPrincipalComponent,
  ],
  templateUrl: './card-principal.component.html',
  styleUrl: './card-principal.component.scss'
})
export class CardPrincipalComponent {
  @Input({ alias: 'tituloPagina' }) tituloPagina: string = ''; 

  textoApresentado: string = 'Valor Digitado...';

  private _digitado: string = '';

  algoDigitado(textoDigitado: string) {
    this._digitado = textoDigitado;
  }

  botaoAcionado() {
    this.textoApresentado = this._digitado;
  }
}
