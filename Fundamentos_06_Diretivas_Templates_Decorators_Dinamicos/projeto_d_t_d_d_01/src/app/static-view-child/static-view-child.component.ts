import { AfterViewInit, Component, ElementRef, input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-static-view-child',
  imports: [],
  templateUrl: './static-view-child.component.html',
  styleUrl: './static-view-child.component.scss'
})
export class StaticViewChildComponent implements OnInit, AfterViewInit {
  
  // A configuracao Static do ViewChild determina se é possível acessar sua viewChild no ngOnInit para elementos HTML totalmente estaticos
  // Caso use a configuracao static e tiver algum elemento nao estatico, como ngIf, o valor static do viewChild vai retorna para o valor padrao false e nao é mais possivel acessar ele no ngOnInit
  @ViewChild('meuInput1', { static: true, }) meuInput1El!: ElementRef<HTMLInputElement>;

  constructor() {
    console.log('constructor', this.meuInput1El);
  }

  ngOnInit() {
    console.log('ngOnInit', this.meuInput1El);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit', this.meuInput1El);

    this.meuInput1El.nativeElement.focus();
  }
}
