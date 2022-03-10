import { Component } from '@angular/core';

@Component({
  selector: 'example-datepicker-filter',
  template: `
    <nc-datepicker placeholder="过滤可选日期" [dateFilter]="myFilter"></nc-datepicker>
  `
})
export class ExampleDatePickerFilterComponent {

  myFilter = (d: Date | null): boolean => {
    const day = d?.getDay();
    // 过滤星期六和星期日。
    return day !== 0 && day !== 6;
  }
}
