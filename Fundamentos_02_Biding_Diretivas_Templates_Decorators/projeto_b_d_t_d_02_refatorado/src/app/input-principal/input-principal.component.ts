import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-principal',
  imports: [],
  templateUrl: './input-principal.component.html',
  styleUrl: './input-principal.component.scss'
})
export class InputPrincipalComponent {
  @Output('algoDigitado') algoDigitado: EventEmitter<string> = new EventEmitter<string>();
  digitandoAlgo(textoDigitado: string) {
    this.algoDigitado.emit(textoDigitado);
  }
}
