import { Component } from '@angular/core';

@Component({
  selector: 'app-instancia-filho-view-child',
  imports: [],
  templateUrl: './instancia-filho-view-child.component.html',
  styleUrl: './instancia-filho-view-child.component.scss'
})
export class InstanciaFilhoViewChildComponent {
  message: string = 'Sou o componente filho';

  dizerOi() {
    alert('Oi!!!');
  }
}
