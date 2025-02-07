import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-ng-class',
  imports: [NgClass],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.scss'
})
export class NgClassComponent {
  isGreen: boolean = true;

  setToGreen() {
    this.isGreen = true;
  }

  setToOrange() {
    this.isGreen = false;
  }
}
