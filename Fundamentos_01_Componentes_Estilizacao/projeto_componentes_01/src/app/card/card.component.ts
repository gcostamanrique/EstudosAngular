import { Component, ViewEncapsulation } from '@angular/core';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardButtonCancelComponent } from '../card-button-cancel/card-button-cancel.component';
import {MatSliderModule} from '@angular/material/slider';

interface IPlano {
  infos: IInfos;
}

interface IInfos {
  tipo: string;
  preco: number;
}

@Component({
  selector: 'app-card',
  imports: [CardButtonComponent, CardButtonCancelComponent, MatSliderModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  //encapsulation: ViewEncapsulation.None,
  //encapsulation: ViewEncapsulation.Emulated,
  //encapsulation: ViewEncapsulation.ShadowDom,
})
export class CardComponent {
  plano: IPlano = {
    infos: {
      tipo: "Simples",
      preco: 100,
    },
  };
}
