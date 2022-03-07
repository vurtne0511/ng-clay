/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NcDateFormats } from './date-formats';

export const NC_NATIVE_DATE_FORMATS: NcDateFormats = {
  parse: {
    dateInput: null,
  },
  display: {
    dateInput: { year: 'numeric', month: 'numeric', day: 'numeric' },
    monthYearLabel: { year: 'numeric', month: 'short' },
    monthLabel: { month: 'short' }
  }
};
