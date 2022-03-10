import { Component, ViewChild } from '@angular/core';
import { NcDatePicker } from '@ng-clay/components/datepicker';

@Component({
  selector: 'example-datepicker-basic',
  template: `
    <nc-radio-group [(ngModel)]="disabled">
      <nc-radio [value]="false">正常</nc-radio>
      <nc-radio [value]="true">禁用</nc-radio>
    </nc-radio-group>
    <nc-datepicker #datepicker
      placeholder="开始日期"
      [(ngModel)]="startDate"
      [disabled]="disabled">
    </nc-datepicker>
  `
})
export class ExampleDatePickerBasicComponent {

  @ViewChild('datepicker', { static: true }) datepicker!: NcDatePicker<Date>;

  startDate = new Date(2012, 5, 20);

  disabled = false;
}
