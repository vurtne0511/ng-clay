import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'example-datepicker-forms',
  styles: [
    `
      .example-values {
        width: 100%;
        max-height: 100px;
        margin-top: 10px;
        overflow: auto;
      }
    `
  ],
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()" ntFormAutofocus>
      <nc-form-field label="日期">
        <nc-datepicker placeholder="日期选择框" formControlName="normal" [dateFilter]="myFilter"></nc-datepicker>
      </nc-form-field>
      <nc-form-field label="日期范围">
        <nc-date-range-picker placeholder="请选择日期范围" formGroupName="range" required>
          <nc-date-range-start formControlName="start"></nc-date-range-start>
          <nc-date-range-end formControlName="end"></nc-date-range-end>
        </nc-date-range-picker>
      </nc-form-field>

      <button class="button" type="submit">Submit</button>
    </form>
    <div class="example-values">
      <div *ngFor="let val of values">{{val}}</div>
    </div>
  `
})
export class ExampleDatePickerFormsComponent {

  form: FormGroup;
  values: Array<Date> = [];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      normal: [null, Validators.required],
      range: this.formBuilder.group({
        start: [null, Validators.required],
        end: [null, Validators.required]
      })
    });
  }

  submit() {
    this.values.push(this.form.value.normal);
  }

  myFilter = (d: Date | null): boolean => {
    const day = d?.getDay();
    // 过滤星期六和星期日。
    return day !== 0 && day !== 6;
  }
}
