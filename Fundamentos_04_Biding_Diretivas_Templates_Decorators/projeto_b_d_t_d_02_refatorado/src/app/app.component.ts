import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardPrincipalComponent } from './card-principal/card-principal.component';

@Component({
  selector: 'app-root',
  imports: [
    //RouterOutlet,
    CardPrincipalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
