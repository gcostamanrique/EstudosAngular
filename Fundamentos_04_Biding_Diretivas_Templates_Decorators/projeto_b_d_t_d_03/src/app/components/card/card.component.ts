import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-card',
  imports: [
    ButtonComponent,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true }) planType: string = '';

  @Input({ required: true }) planPrice: number = 0;

  @Input({ required: true }) cardStyle: 'orange' | 'purple' = 'orange';

  @Output('buttonClicked') buttonClickedEmitt = new EventEmitter<void>();

  onButtonClicked() {
    this.buttonClickedEmitt.emit();
  }
}
