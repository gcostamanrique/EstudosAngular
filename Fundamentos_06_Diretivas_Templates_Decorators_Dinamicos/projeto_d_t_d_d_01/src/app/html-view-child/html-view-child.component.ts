import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-html-view-child',
  imports: [],
  templateUrl: './html-view-child.component.html',
  styleUrl: './html-view-child.component.scss'
})
export class HtmlViewChildComponent {
  @ViewChild('meuInput1') meuInput1El!: ElementRef<HTMLInputElement>;

  updateInputText() {
    this.meuInput1El.nativeElement.value = 'Texto Atualizado';
  }


  @ViewChild('meuInput2') meuInput2El!: ElementRef<HTMLInputElement>;

  focus() {
    this.meuInput2El.nativeElement.focus();
  }

  @ViewChild('minhaDiv1') minhaDiv1El!: ElementRef<HTMLDivElement>;

  updateDivContent() {
    this.minhaDiv1El.nativeElement.textContent = 'Conteúdo Atualizado'
  }
}
