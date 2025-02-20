import { Component, ElementRef, ViewChild } from '@angular/core';
import { InstanciaFilhoViewChildComponent } from '../instancia-filho-view-child/instancia-filho-view-child.component';

@Component({
  selector: 'app-instancia-view-child',
  imports: [
    InstanciaFilhoViewChildComponent,
  ],
  templateUrl: './instancia-view-child.component.html',
  styleUrl: './instancia-view-child.component.scss'
})
export class InstanciaViewChildComponent {
  @ViewChild('filhoComponent') filhoComponentRef!: InstanciaFilhoViewChildComponent;

  hello() {
    this.filhoComponentRef.dizerOi();
    this.filhoComponentRef.message = 'Eu Disse Oi!';
  }
}
