import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NcDatePickerModule } from '@ng-clay/components/datepicker';
import { NcMomentDateModule } from '@ng-clay/moment-adapter';

import { ExampleDatePickerMomentComponent } from './moment';

// import { NcNativeDateModule } from "@ng-clay/components";


@NgModule({
  imports: [
    FormsModule,
    // NcNativeDateModule, // 引入NativeDate模块
    NcMomentDateModule,   // 引入MomentDate模块
    NcDatePickerModule,
  ],
  declarations: [ExampleDatePickerMomentComponent],
  exports: [ExampleDatePickerMomentComponent]
})
export class ExampleDatePickerMomentModule { }
