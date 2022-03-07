import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NcFileSelectDirective } from './file-select.directive';
import { NcFileSizePipe } from './file-size.pipe';

export * from './file-categories';
export * from './file-select-errors';
export * from './file-utils';
export * from './file-select.directive';
export * from './file-size.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [
    NcFileSizePipe,
    NcFileSelectDirective
  ],
  declarations: [
    NcFileSizePipe,
    NcFileSelectDirective
  ]
})
export class NtFileModule { }
