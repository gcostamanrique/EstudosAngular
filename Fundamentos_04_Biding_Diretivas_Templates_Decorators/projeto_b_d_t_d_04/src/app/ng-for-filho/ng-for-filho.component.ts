import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-ng-for-filho',
  imports: [NgIf],
  templateUrl: './ng-for-filho.component.html',
  styleUrl: './ng-for-filho.component.scss'
})
export class NgForFilhoComponent {
  @Input({ required: true }) personName: string = '';

  @Input({ required: true }) personAge: number = 0;

  @Input({ required: true }) personIndex: number = 0;

  @Input({ required: true }) isFirst: boolean = false;

  @Input({ required: true }) isLast: boolean = false;

  @Input({ required: true }) isOdd: boolean = false;

  @Input({ required: true }) isSelected: boolean = false;

  @Output('personSelected') onPersonSelectEmitt = new EventEmitter<number>();

  selectPerson() {
    this.onPersonSelectEmitt.emit(this.personIndex);
  }
}
