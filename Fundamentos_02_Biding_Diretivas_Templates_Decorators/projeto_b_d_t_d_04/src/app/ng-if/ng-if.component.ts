import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  imports: [NgIf],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.scss'
})
export class NgIfComponent {
  minhaProp: boolean = true;

  toggleProp() {
    this.minhaProp = !this.minhaProp
  }

  pessoa: any = {
    status: 1,
    name: undefined,
  }

  isTruthy() {
    // return {};
    // return [];
    // return true;
    // return 1;
    // return 'teste';
    // return '0';
    // return 'false';
    return this.pessoa.status;
  }

  isFalsy() {
    // return false;
    // return 0;
    // return "";
    // return '';
    // return null;
    // return undefined;
    // return -0;
    // return NaN;
    // return this.pessoa.name;
    return this.pessoa.endereco?.rua;
  }
}
