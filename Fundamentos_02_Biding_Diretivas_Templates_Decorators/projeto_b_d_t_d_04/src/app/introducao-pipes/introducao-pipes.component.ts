import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { StatusClassPipe } from './status-class.pipe';

@Component({
  selector: 'app-introducao-pipes',
  imports: [
    UpperCasePipe, 
    JsonPipe, 
    StatusClassPipe,
  ],
  templateUrl: './introducao-pipes.component.html',
  styleUrl: './introducao-pipes.component.scss'
})
export class IntroducaoPipesComponent {
  text = 'Guilherme';

  pessoa1 = {
    name: 'Guilherme',
    status: 1,
  };

  pessoa2 = {
    name: 'Felipe',
    status: 2,
  };

  pessoa3 = {
    name: 'Luis',
    status: 3,
  };

  contador: number = 0;

  getStyle(status: number) {
    this.contador += 1;

    console.log('método getStyle: ' + this.contador);  

    return {
      'active': status === 1,
      'partial': status === 2,
      'blocked': status === 3,
    }
  }

}
