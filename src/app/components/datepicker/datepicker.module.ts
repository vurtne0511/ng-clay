import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  DateAdapter,
  NativeDateAdapter,
  NC_DATE_FORMATS,
  NC_NATIVE_DATE_FORMATS,
  NcNativeDateModule
} from '@ng-clay/components/core';
import { NcDatePickerModule } from '@ng-clay/components/datepicker';
import { NcDropdownModule } from '@ng-clay/components/dropdown';
import { NcFormsModule } from '@ng-clay/components/forms';
import { NcOverlayModule } from '@ng-clay/components/overlay';
import { NcRadioModule } from '@ng-clay/components/radio';
import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { DatePickerDocumentComponent } from './datepicker.component';
import { ExampleDatePickerBasicComponent } from './examples/basic';
import { ExampleDatePickerBoundaryComponent } from './examples/boundary';
import { ExampleDatePickerChangeComponent } from './examples/change';
import { ExampleDatePickerFilterComponent } from './examples/filter';
import { ExampleDatePickerFormsComponent } from './examples/forms';
import { ExampleDatePickerMomentModule } from './examples/moment.module';
import { ExampleDatePickerRangeComponent } from './examples/range';
import { ExampleDatePickerRangeStrategyComponent } from './examples/range-strategy';
import { ExampleDatePickerStartComponent } from './examples/start';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NcMarkdownModule,
    NcNativeDateModule,
    NcDatePickerModule,
    NcExampleModule,
    NcFormsModule,
    NcDropdownModule,
    ExampleDatePickerMomentModule,
    NcRadioModule,
    NcOverlayModule,
    PortalModule,
    RouterModule.forChild([
      { path: '', component: DatePickerDocumentComponent }
    ])
  ],
  providers: [
    { provide: DateAdapter, useClass: NativeDateAdapter },
    { provide: NC_DATE_FORMATS, useValue: NC_NATIVE_DATE_FORMATS }
  ],
  declarations: [
    DatePickerDocumentComponent,
    ExampleDatePickerBasicComponent,
    ExampleDatePickerBoundaryComponent,
    ExampleDatePickerStartComponent,
    ExampleDatePickerFilterComponent,
    ExampleDatePickerFormsComponent,
    ExampleDatePickerChangeComponent,
    ExampleDatePickerRangeComponent,
    ExampleDatePickerRangeStrategyComponent
  ]
})
export class DatePickerDocumentModule { }
