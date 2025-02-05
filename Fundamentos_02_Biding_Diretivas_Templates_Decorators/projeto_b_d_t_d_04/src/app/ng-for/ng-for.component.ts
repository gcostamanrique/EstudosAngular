import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor, NgIf],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.scss'
})
export class NgForComponent {
  listPeople = [
    { name: 'Guilherme', age: 28 },
    { name: 'Felipe', age: 24 },
    { name: 'Jorge', age: 22 },
    { name: 'João', age: 20 },
  ];

  personSelectedIndex: number | undefined;

  selectPerson(index: number) {
    this.personSelectedIndex = index;
  }
}
