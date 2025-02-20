import { NgFor } from '@angular/common';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-view-children',
  imports: [
    NgFor,
  ],
  templateUrl: './view-children.component.html',
  styleUrl: './view-children.component.scss'
})
export class ViewChildrenComponent implements AfterViewInit {
  buttonsList = [
    'Botao 1',
    'Botao 2',
    'Botao 3',
  ];

  @ViewChildren('meuButton1') buttons1El!: QueryList<ElementRef<HTMLButtonElement>>;

  ngAfterViewInit() {
    //console.log(this.buttons1El);
    //console.log(this.buttons1El.toArray());

    this.buttons1El.changes.subscribe((result) => {
      console.log(result);
    });
  }

  changeColor(event: Event) {
    const btnElement = event.target as HTMLButtonElement;

    btnElement.style.backgroundColor = 'orange';
    btnElement.style.color = 'white';
  }

  resetButtons() {
    this.buttons1El.forEach((btnEl) => {
      //console.log(btnEl);

      btnEl.nativeElement.style.backgroundColor = '';
      btnEl.nativeElement.style.color = 'black';
    });
  }

  fist() {
    //const primeiro = this.buttons1El.get(0);

    //const primeiro = this.buttons1El.find((btnEl) => btnEl.nativeElement.className === 'btn-0');

    const primeiro = this.buttons1El.toArray()[0];

    console.log(primeiro);
  }

  remove() {
    this.buttonsList.shift();
  }
}
