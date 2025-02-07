import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-ng-style',
  imports: [NgStyle],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.scss'
})
export class NgStyleComponent {
  fontSize: number = 15;

  textColor: 'white' | 'orange' = 'white';

  buttonText: 'White' | 'Orange' = 'Orange'

  stylesString: string = 'font-size: 15px; color: white';

  stylesObj = {
    'font-size': this.fontSize + 'px',
    'color': this.textColor,
  };

  increaseFontSize() {
    this.fontSize += 5;

    this.stylesString = `font-size: ${this.fontSize}px; color: ${this.textColor}`;

    this.stylesObj = {
      'font-size': this.fontSize + 'px',
      'color': this.textColor,
    }
  }

  decraseFontSize() {
    this.fontSize -= 5;

    this.stylesString = `font-size: ${this.fontSize}px; color: ${this.textColor}`;

    this.stylesObj = {
      'font-size': this.fontSize + 'px',
      'color': this.textColor,
    }
  }

  toggleFontColor() {
    if (this.textColor === 'white') {
      this.textColor = 'orange';
      this.buttonText = 'White';
    } else {
      this.textColor = 'white';
      this.buttonText = 'Orange';
    }

    this.stylesString = `font-size: ${this.fontSize}px; color: ${this.textColor}`;

    this.stylesObj = {
      'font-size': this.fontSize + 'px',
      'color': this.textColor,
    }
  }
}
