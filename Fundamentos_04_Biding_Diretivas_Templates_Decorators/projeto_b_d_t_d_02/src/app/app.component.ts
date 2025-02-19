import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CardRoxoComponent } from './card-roxo/card-roxo.component';

@Component({
  selector: 'app-root',
  imports: [
    //RouterOutlet,
    CardComponent,
    CardRoxoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  cardPlanType = 'Simples';
  cardPlanPrice = 100;

  handlePlanType(text: string){
    this.cardPlanType = text;
  }
}
