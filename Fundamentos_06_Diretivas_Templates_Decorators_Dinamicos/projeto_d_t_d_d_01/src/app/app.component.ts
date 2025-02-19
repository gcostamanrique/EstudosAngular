import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CriacaoChangeDetectionComponent } from './criacao-change-detection/criacao-change-detection.component';
import { PassagemParametroEscopoComponent } from './passagem-parametro-escopo/passagem-parametro-escopo.component';

@Component({
  selector: 'app-root',
  imports: [
    //RouterOutlet,
    //CriacaoChangeDetectionComponent,
    PassagemParametroEscopoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
