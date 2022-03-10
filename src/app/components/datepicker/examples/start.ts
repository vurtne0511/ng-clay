import { Component } from '@angular/core';

@Component({
  selector: 'example-datepicker-start',
  template: `
    <nc-datepicker placeholder="默认年月" [startAt]="startDate"></nc-datepicker>
  `
})
export class ExampleDatePickerStartComponent {
  startDate = new Date(2019, 10, 1);
}
