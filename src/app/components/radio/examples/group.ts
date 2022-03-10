import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'example-radio-group',
  template: `
    <form [formGroup]="form" ntFormOrientation="horizontal">
      <nc-radio-group formControlName="fruits">
        <nc-radio value="apple">苹果</nc-radio>
        <nc-radio value="melon">哈密瓜</nc-radio>
        <nc-radio value="strawberry">草莓</nc-radio>
        <nc-radio value="mango">芒果</nc-radio>
      </nc-radio-group>
    </form>

    {{ form.get('fruits')?.value }}
`
})
export class ExampleRadioGroupComponent {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      fruits: this.formBuilder.control('apple')
    });
  }
}
