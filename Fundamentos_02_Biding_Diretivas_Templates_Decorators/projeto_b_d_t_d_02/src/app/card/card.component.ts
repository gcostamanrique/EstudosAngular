import { Component, Input } from '@angular/core';
import { CardButtonComponent } from '../card-button/card-button.component';

@Component({
  selector: 'app-card',
  imports: [
    CardButtonComponent,
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input('planType') planType: string = '';
  @Input({ required: true, alias: 'planPriceAlias' }) planPrice: number = 0;

}
