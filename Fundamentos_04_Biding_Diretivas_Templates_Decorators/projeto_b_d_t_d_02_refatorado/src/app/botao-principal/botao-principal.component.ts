import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-botao-principal',
  imports: [],
  templateUrl: './botao-principal.component.html',
  styleUrl: './botao-principal.component.scss'
})
export class BotaoPrincipalComponent {
  @Output('botaoAcionado') botaoAcionado = new EventEmitter();
  acionarBotao() {
    this.botaoAcionado.emit();
  }
}
