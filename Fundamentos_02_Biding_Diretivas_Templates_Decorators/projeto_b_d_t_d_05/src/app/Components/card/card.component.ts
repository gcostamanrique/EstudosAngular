import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { CardsEnum } from '../../Enum/CardsEnum';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-card',
  imports: [
    NgIf,
    ButtonComponent,
    InputComponent,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true, alias: 'tipoCard' }) tipoCard: CardsEnum = CardsEnum.Central;

  @Input({ required: true, alias: 'tituloCentral' }) tituloCentral: string = '';

  @Input({ alias: 'textoCentral' }) textoCentral: string = '';

  @Output('repassarInputEmittTituloCentral') repassarInputEmittTituloCentral = new EventEmitter<string>();

  @Output('repassarInputEmittTextoCentral') repassarInputEmittTextoCentral = new EventEmitter<string>();

  receberInputEmittTituloCentral(valor: string) {
    this.repassarInputEmittTituloCentral.emit(valor);
  }

  receberInputEmittTextoCentral(valor: string) {
    this.repassarInputEmittTextoCentral.emit(valor);
  }

}
