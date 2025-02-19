import { Component } from '@angular/core';

@Component({
  selector: 'app-property-event-attribute-binding',
  imports: [],
  templateUrl: './property-event-attribute-binding.component.html',
  styleUrl: './property-event-attribute-binding.component.scss'
})
export class PropertyEventAttributeBindingComponent {
  inputText: string = "Texto Inicial";

  inputType: string = "text";

  isDisabled: boolean = false;

  buttonTitle: string = "Título do botão";

  buttonDisable: boolean = true;

  contador: number = 1;

  enableInput() {
    this.isDisabled = false;
  }

  disableInput() {
    this.isDisabled = true;
  }

  enableText() {
    this.inputType = "Text";
  }

  enablePassword() {
    this.inputType = "Password";
  }

  enableInputTextPadrao() {
    this.inputText = "Texto Inicial";
  }

  enableInputTextAlterado() {
    this.inputText = "Texto Alterado";
  }

  logInputText() {
    console.log(this.inputText);
  }

  handleInputKeyup(event: KeyboardEvent) {
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText);
  }

  handleInputEvent(event: Event) {
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText);
  }

  onButtonClick() {
    if (this.contador % 2 == 0) {
      this.buttonTitle = "Título Alterado";
      this.contador++;
    }
    else {
      this.buttonTitle = "Título do botão";
      this.contador++;
    }

    this.buttonDisable = !this.buttonDisable;
  }
}
