import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input({ required: true, alias: 'estiloInput' }) estiloInput: string = '';

  @Input({ required: true, alias: 'placeholderInput' }) placeholderInput: string = '';

  @Input({ required: true, alias: 'maxLengthInput' }) maxLengthInput: number = 0;

  @Input() valorInput: string = '';

  @Output('enviarInputEmitt') enviarInputEmitt = new EventEmitter<string>();

  valorEmitt() {
    this.enviarInputEmitt.emit(this.valorInput);
  }

}
