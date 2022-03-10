import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'example-select-coordinat',
  template: `
    <form [formGroup]="form" ntFormAutofocus>
      <nc-form-field label="选择省份">
        <nc-select name="single" placeholder="单选" formControlName="selectedProvince">
          <nc-option *ngFor="let province of provinceData" [value]="province">
            {{province}}
          </nc-option>
        </nc-select>
      </nc-form-field>
      <nc-form-field label="选择城市">
        <nc-select name="multiple" placeholder="单选" formControlName="selectedCity">
          <nc-option *ngFor="let city of cityData[selectedProvince.value]" [value]="city">
            {{city}}
          </nc-option>
        </nc-select>
      </nc-form-field>
    </form>
  `
})
export class ExampleSelectCoordinatComponent {

  form: FormGroup;

  get selectedProvince () {
    return this.form.get('selectedProvince') as FormControl;
  }


  provinceData = ['Zhejiang', 'Jiangsu'];

  cityData: { [place: string]: string[] } = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']
  };

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      selectedProvince: ['Zhejiang'],
      selectedCity: ['Hangzhou']
    });

    this.selectedProvince.valueChanges.subscribe((value: string) => {
      this.form.patchValue({ 'selectedCity': this.cityData[value][0]});
    });
  }
}
