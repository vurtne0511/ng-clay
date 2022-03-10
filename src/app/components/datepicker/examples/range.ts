import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: "example-datepicker-range",
  template: `
    <nc-date-range-picker placeholder="开始日期">
      <nc-date-range-start [(ngModel)]="startDate"></nc-date-range-start>
      <nc-date-range-end [(ngModel)]="endDate"></nc-date-range-end>
    </nc-date-range-picker>

    <nc-date-range-picker placeholder="开始日期" [formGroup]="rangeGroup">
      <nc-date-range-start formControlName="start"></nc-date-range-start>
      <nc-date-range-end formControlName="end"></nc-date-range-end>
    </nc-date-range-picker>
  `,
})
export class ExampleDatePickerRangeComponent {

  startDate = new Date(2012, 5, 20);
  endDate = new Date(2013, 5, 20);

  rangeGroup = new FormGroup(
    {
      start: new FormControl(new Date(2012, 5, 20)),
      end: new FormControl(new Date(2013, 5, 20)),
    }
  );
}
