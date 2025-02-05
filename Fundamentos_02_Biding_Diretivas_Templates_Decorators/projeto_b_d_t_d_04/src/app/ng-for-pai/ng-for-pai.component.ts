import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgForFilhoComponent } from '../ng-for-filho/ng-for-filho.component';

@Component({
  selector: 'app-ng-for-pai',
  imports: [NgFor, NgForFilhoComponent],
  templateUrl: './ng-for-pai.component.html',
  styleUrl: './ng-for-pai.component.scss'
})
export class NgForPaiComponent {
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
