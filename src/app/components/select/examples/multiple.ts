import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'example-select-multiple',
  template: `
    <form [formGroup]="form" ntFormAutofocus>
      <nc-form-field label="多选下拉框">
        <nc-select name="multiple" placeholder="多选" formControlName="multiple" multiple>
          <nc-option *ngFor="let alphabet of alphabets" [value]="alphabet">
            {{alphabet}}
          </nc-option>
        </nc-select>
      </nc-form-field>
      <button class="button" type="submit">Submit</button>
    </form>
  `
})
export class ExampleSelectMultipleComponent {

  form: FormGroup;
  alphabets = Array(26).fill(65).map((value, index) => String.fromCharCode(value + index));

  value = ['A'];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      multiple: [null, [Validators.required, Validators.minLength(3)]]
    });
  }
}
