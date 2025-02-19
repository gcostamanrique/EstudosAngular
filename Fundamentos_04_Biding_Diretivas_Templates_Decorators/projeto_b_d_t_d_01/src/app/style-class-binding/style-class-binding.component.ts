import { Component } from '@angular/core';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-style-class-binding',
  imports: [],
  templateUrl: './style-class-binding.component.html',
  styleUrl: './style-class-binding.component.scss'
})
export class StyleClassBindingComponent {
  widthButton01: string = "110px";
  
  widthButton02: number = 120;

  stylesObj = {
    width: '150px',
    backgroundColor: 'grey',
  }

  updateStyleObj() {
    this.stylesObj.width = '150px';
    this.stylesObj.backgroundColor = 'lightblue';
  }

  updateStyleObjCorrect() {
    this.stylesObj = {
      width: '150px',
      backgroundColor: 'lightblue',
    }
  }

  updateStyleObjCorrectInitial() {
    this.stylesObj = {
      width: '160px',
      backgroundColor: 'grey',
    }
  }

  updateWidth() {
    this.widthButton01 = '200px';
    this.widthButton02 = 200;
  }

  updateWidthInitial() {
    this.widthButton01 = '110px';
    this.widthButton02 = 120;
  }

  isRedButton: boolean = true;

  isGreenButton: boolean = true;

  isRed: boolean = true;

  isGreen: boolean = true;

  updateRed() {
    this.isRed = true;
    this.isGreen = false;
  }

  updateGreen() {
    this.isRed = false;
    this.isGreen = true;
  }
}
