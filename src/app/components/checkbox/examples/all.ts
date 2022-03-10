import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NcCheckboxChange } from '@ng-clay/components/checkbox';

@Component({
  selector: 'example-checkbox-all',
  template: `
    <nc-checkbox [indeterminate]="indeterminate" [checked]="isAll" (change)="onChange($event)">测试</nc-checkbox>
    <form [formGroup]="form" ntFormOrientation="horizontal">
      <nc-checkbox-group formControlName="fruits">
        <nc-checkbox value="apple">苹果</nc-checkbox>
        <nc-checkbox value="melon">哈密瓜</nc-checkbox>
        <nc-checkbox value="strawberry">草莓</nc-checkbox>
        <nc-checkbox value="mango">芒果</nc-checkbox>
      </nc-checkbox-group>
    </form>
  `
})
export class ExampleCheckboxAllComponent {

  form: FormGroup = this.formBuilder.group({
    fruits: this.formBuilder.control(['apple'])
  });

  fruits: any[] = ['apple'];

  checkbox: FormControl;

  indeterminate = false;

  isAll = false;

  constructor(private formBuilder: FormBuilder) {

    this.checkbox = this.formBuilder.control('');

    this.indeterminate = this.form.get('fruits')?.value.length > 0;

    this.form.get('fruits')?.valueChanges.subscribe(value => {
      this.indeterminate = value.length > 0;
      this.isAll = value.length === 4;
    });


  }

  onChange(change: NcCheckboxChange) {
    if (change.checked) {
      this.form.get('fruits')?.setValue(['apple', 'melon', 'strawberry', 'mango']);
    } else {
      this.form.get('fruits')?.setValue([]);
    }
  }
}
