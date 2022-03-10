import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'example-radio-disabled',
  template: `
    <form [formGroup]="form" ntFormOrientation="horizontal">
      <nc-radio-group formControlName="disabled-group">
        <nc-radio value="disabled" disabled>disabled</nc-radio>
        <nc-radio value="disabled-checked" disabled>disabled-checked</nc-radio>
      </nc-radio-group>
    </form>
`
})
export class ExampleRadioDisabledComponent {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      'disabled-group': this.formBuilder.control('disabled-checked')
    });
  }
}
