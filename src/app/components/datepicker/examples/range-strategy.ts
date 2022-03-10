import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WEEKLY_NC_CALENDAR_RANGE_STRATEGY_PROVIDER } from '@ng-clay/components/datepicker';

@Component({
  selector: "example-datepicker-range-strategy",
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
  providers: [
    WEEKLY_NC_CALENDAR_RANGE_STRATEGY_PROVIDER
  ]
})
export class ExampleDatePickerRangeStrategyComponent {

  startDate = new Date();
  endDate = new Date();

  rangeGroup = new FormGroup(
    {
      start: new FormControl(),
      end: new FormControl(),
    }
  );
}
