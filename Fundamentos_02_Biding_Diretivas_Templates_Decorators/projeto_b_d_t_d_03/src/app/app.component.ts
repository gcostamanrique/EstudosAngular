import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';

interface cardInfo {
  plan: string,
  price: number,
  style: 'orange' | 'purple',
}

@Component({
  selector: 'app-root',
  imports: [
    //RouterOutlet,
    CardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  cardPlanoSimples: cardInfo = {
    plan: 'Simples',
    price: 100,
    style: 'orange'
  }

  cardPlanoCompleto: cardInfo = {
    plan: 'Completo',
    price: 250,
    style: 'purple'
  }

  onCardButtonClicked() {
    console.log("onCardButtonClicked");
  }
}
