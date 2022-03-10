import { Moment } from 'moment';

import { Component } from '@angular/core';
import { DateAdapter, NC_DATE_FORMATS } from '@ng-clay/components/core';
import { MomentDateAdapter, NC_MOMENT_DATE_FORMATS } from '@ng-clay/moment-adapter';

@Component({
  selector: 'example-datepicker-moment',
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
    <nc-datepicker placeholder="日期" [(ngModel)]="momentDate"></nc-datepicker>
    <div>{{momentDate}}</div>
  `,
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter },
    { provide: NC_DATE_FORMATS, useValue: NC_MOMENT_DATE_FORMATS }
  ],
})
export class ExampleDatePickerMomentComponent {
  momentDate!: Moment;
}
