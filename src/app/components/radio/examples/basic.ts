import { Component } from '@angular/core';

@Component({
  selector: 'example-radio-basic',
  template: `
    <nc-radio value="checked" [checked]="checked">checked</nc-radio>
  `
})
export class ExampleRadioBasicComponent {

  checked: boolean = true;

  constructor() {

  }
}
