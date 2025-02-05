import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-two-way-data-binding',
  imports: [FormsModule],
  templateUrl: './two-way-data-binding.component.html',
  styleUrl: './two-way-data-binding.component.scss'
})
export class TwoWayDataBindingComponent {
  name01: string = 'Guilherme';

  name02: string = 'Guilherme';

  handeInputChange01(event: string) {
    console.log('handeInputChange01');
    this.name01 = event;
  }

  handeInputChange02(event: string) {
    console.log('handeInputChange02');
  }
}
