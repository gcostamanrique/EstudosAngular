import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './Components/card/card.component';
import { CardsEnum } from './Enum/CardsEnum';

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
  CardsEnum = CardsEnum;

  titulo: string = 'Título Principal';

  texto: string = 'Texto principal da página!';

  receberTitulo(valor: string) {
    this.titulo = valor;
    console.log("titulo: " + this.titulo);
  }

  receberTexto(valor: string) {
    this.texto = valor;
    console.log("texto: " + this.texto);
  }

}
