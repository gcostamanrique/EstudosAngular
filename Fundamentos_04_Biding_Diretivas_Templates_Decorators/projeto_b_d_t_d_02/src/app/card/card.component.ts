import { Component, Input, numberAttribute } from '@angular/core';
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
  
  @Input({ required: true, alias: 'planPriceAlias', transform: numberAttribute }) planPrice: number = 0;

  //-------------------------------------------

  // private _planType: string = '';
  
  // @Input('planType')
  
  // set planType(value: string) {
  //   this._planType = value.toUpperCase();
  // }

  // get planType(): string {
  //   return this._planType;
  // }
  
  //-------------------------------------------

  @Input({ alias: 'planType', transform: (value: string) => handlePlanType(value) }) planType: string = '';

  buttonClicked(valueEmitted: boolean) {
    console.log("buttonClicked(" + valueEmitted + ")");
    console.log("planType", this.planType);
  }
}

function handlePlanType(value: string) {
  return value.toUpperCase();
}
