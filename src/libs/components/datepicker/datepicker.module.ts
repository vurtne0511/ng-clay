import { A11yModule } from '@angular/cdk/a11y';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NcPseudoInputModule } from '@ng-clay/components/core';
import { NcOverlayModule } from '@ng-clay/components/overlay';

import { NcCalendarBody } from './calendar-body.component';
import { NcCalendarHeader } from './calendar-header.component';
import { NcDatePickerCalendar } from './calendar.component';
import { NcDateRangeEnd, NcDateRangeStart } from './date-range-parts.directive';
import { NcDateRangePicker } from './date-range-picker.component';
import { NcDatePickerContent } from './datepicker-content.component';
import { NcDatePicker } from './datepicker.component';
import { NcCalendarMonth } from './month.component';
import { NcCalendarMultiYear } from './multi-year.component';
import { NcCalendarYear } from './year.component';

@NgModule({
  imports: [
    CommonModule,
    A11yModule,
    PortalModule,
    NcOverlayModule,
    NcPseudoInputModule,
  ],
  exports: [
    NcDatePicker,
    NcDateRangePicker,
    NcDateRangeStart,
    NcDateRangeEnd
  ],
  declarations: [
    NcDatePicker,
    NcDatePickerContent,
    NcDatePickerCalendar,
    NcCalendarBody,
    NcCalendarHeader,
    NcCalendarMonth,
    NcCalendarYear,
    NcCalendarMultiYear,
    NcDateRangePicker,
    NcDateRangeStart,
    NcDateRangeEnd
  ]
})
export class NcDatePickerModule { }
