import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-painel-principal',
  imports: [],
  templateUrl: './painel-principal.component.html',
  styleUrl: './painel-principal.component.scss'
})
export class PainelPrincipalComponent {
  @Input({ alias: 'apresentado' }) apresentado: string = '';
}
