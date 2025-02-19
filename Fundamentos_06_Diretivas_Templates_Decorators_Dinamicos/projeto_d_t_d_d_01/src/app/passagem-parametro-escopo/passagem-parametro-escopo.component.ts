import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-passagem-parametro-escopo',
  imports: [
    FormsModule,
    NgIf,
  ],
  templateUrl: './passagem-parametro-escopo.component.html',
  styleUrl: './passagem-parametro-escopo.component.scss'
})
export class PassagemParametroEscopoComponent {
  clicou(input: HTMLInputElement) {
    console.log(input.value);
  }


}

// const funcaoPai = () => {
//   let pai = 'paiFuncaoPai';

//   const funcaoFilha = () => {
//     let filha = 'filhaFuncaoFilha';
//     pai = 'paiFuncaoFilha';
    
//     const funcaoNeto = () => {
//       let neto = 'netoFuncaoNeto';
//       pai = 'paiFuncaoNeto';
//       filha = 'filhaFuncaoNeto';
//     }
//   }
// }