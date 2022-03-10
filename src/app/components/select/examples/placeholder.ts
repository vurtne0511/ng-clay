import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'example-select-placeholder',
  template: `
    <form [formGroup]="form" ntFormAutofocus>
      <nc-form-field label="自定义的提示信息下拉框">
        <nc-select name="single" placeholder="自定义的提示信息" formControlName="single">
          <nc-option *ngFor="let alphabet of alphabets" [value]="alphabet">
            {{alphabet}}
          </nc-option>
        </nc-select>
      </nc-form-field>
      <button class="button" type="submit">Submit</button>
    </form>
  `
})
export class ExampleSelectPlaceholderComponent {

  form: FormGroup;
  alphabets = Array(26).fill(65).map((value, index) => String.fromCharCode(value + index));

  value:String [] = [];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      single: [''],
    });
  }
}
