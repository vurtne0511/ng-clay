/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { DateAdapter, NC_DATE_FORMATS, NC_DATE_LOCALE } from '@ng-clay/components/core';

import { MomeNcDateAdapter, NC_MOMENC_DATE_ADAPTER_OPTIONS } from './moment-date-adapter';
import { NC_MOMENC_DATE_FORMATS } from './moment-date-formats';

@NgModule({
  providers: [
    {
      provide: DateAdapter,
      useClass: MomeNcDateAdapter,
      deps: [NC_DATE_LOCALE, NC_MOMENC_DATE_ADAPTER_OPTIONS]
    }
  ],
})
export class MomeNcDateModule { }

@NgModule({
  imports: [MomeNcDateModule],
  providers: [
    { provide: NC_DATE_FORMATS, useValue: NC_MOMENC_DATE_FORMATS }
  ],
})
export class NcMomeNcDateModule { }
