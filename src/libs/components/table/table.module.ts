import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  NcCellDefDirective,
  NcCellDirective,
  NcColumnDirective,
  NcFooterCellDefDirective,
  NcFooterCellDirective,
  NcHeaderCellDefDirective,
  NcHeaderCellDirective
} from './cell.directive';
import { NcTableResizable } from './resizable.directive';
import {
  NcFooterRowComponent,
  NcFooterRowDefDirective,
  NcHeaderRowComponent,
  NcHeaderRowDefDirective,
  NcRowComponent,
  NcRowDefDirective
} from './row.directive';
import { NcTableComponent } from './table.component';

const EXPORTS_DECLARATIONS = [
  NcTableComponent,
  NcTableResizable,
  NcCellDefDirective,
  NcCellDirective,
  NcColumnDirective,
  NcFooterCellDefDirective,
  NcFooterCellDirective,
  NcHeaderCellDefDirective,
  NcHeaderCellDirective,
  NcFooterRowComponent,
  NcFooterRowDefDirective,
  NcHeaderRowComponent,
  NcHeaderRowDefDirective,
  NcRowComponent,
  NcRowDefDirective
];

@NgModule({
  imports: [CommonModule, CdkTableModule],
  exports: EXPORTS_DECLARATIONS,
  declarations: EXPORTS_DECLARATIONS
})
export class NcTableModule { }
