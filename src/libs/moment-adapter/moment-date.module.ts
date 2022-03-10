/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { DateAdapter, NC_DATE_FORMATS, NC_DATE_LOCALE } from '@ng-clay/components/core';

import { MomentDateAdapter, NC_MOMENTDATE_ADAPTER_OPTIONS } from './moment-date-adapter';
import { NC_MOMENT_DATE_FORMATS } from './moment-date-formats';

@NgModule({
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [NC_DATE_LOCALE, NC_MOMENTDATE_ADAPTER_OPTIONS]
    }
  ],
})
export class MomentDateModule { }

@NgModule({
  imports: [MomentDateModule],
  providers: [
    { provide: NC_DATE_FORMATS, useValue: NC_MOMENT_DATE_FORMATS }
  ],
})
export class NcMomentDateModule { }
