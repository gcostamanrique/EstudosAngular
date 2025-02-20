import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CriacaoChangeDetectionComponent } from './criacao-change-detection/criacao-change-detection.component';
import { PassagemParametroEscopoComponent } from './passagem-parametro-escopo/passagem-parametro-escopo.component';
import { HtmlViewChildComponent } from './html-view-child/html-view-child.component';
import { InstanciaViewChildComponent } from './instancia-view-child/instancia-view-child.component';
import { StaticViewChildComponent } from './static-view-child/static-view-child.component';
import { ViewChildrenComponent } from './view-children/view-children.component';

@Component({
  selector: 'app-root',
  imports: [
    //RouterOutlet,
    //CriacaoChangeDetectionComponent,
    //PassagemParametroEscopoComponent,
    //HtmlViewChildComponent,
    //InstanciaViewChildComponent,
    // StaticViewChildComponent,
    ViewChildrenComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
