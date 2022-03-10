import {
  CDK_ROW_TEMPLATE,
  CdkFooterRow,
  CdkFooterRowDef,
  CdkHeaderRow,
  CdkHeaderRowDef,
  CdkRow,
  CdkRowDef,
  CdkNoDataRow
} from '@angular/cdk/table';
import { ChangeDetectionStrategy, Component, Directive, ViewEncapsulation } from '@angular/core';

@Directive({
  selector: '[ncHeaderRowDef]',
  providers: [{ provide: CdkHeaderRowDef, useExisting: NcHeaderRowDefDirective }],
  inputs: ['columns: ncHeaderRowDef', 'sticky: ncHeaderRowDefSticky'],
})
export class NcHeaderRowDefDirective extends CdkHeaderRowDef { }

@Directive({
  selector: '[ncFooterRowDef]',
  providers: [{ provide: CdkFooterRowDef, useExisting: NcFooterRowDefDirective }],
  inputs: ['columns: ncFooterRowDef', 'sticky: ncFooterRowDefSticky'],
})
export class NcFooterRowDefDirective extends CdkFooterRowDef { }

@Directive({
  selector: '[ncRowDef]',
  providers: [{ provide: CdkRowDef, useExisting: NcRowDefDirective }],
  inputs: ['columns: ncRowDefColumns', 'when: ncRowDefWhen'],
})
export class NcRowDefDirective<T> extends CdkRowDef<T> { }

@Component({
  selector: 'nc-header-row, tr[nc-header-row]',
  template: CDK_ROW_TEMPLATE,
  host: {
    'class': 'nc-header-row',
    'role': 'row',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'ncHeaderRow',
  providers: [{ provide: CdkHeaderRow, useExisting: NcHeaderRowComponent }],
})
export class NcHeaderRowComponent extends CdkHeaderRow { }

@Component({
  selector: 'nc-footer-row, tr[nc-footer-row]',
  template: CDK_ROW_TEMPLATE,
  host: {
    'class': 'nc-footer-row',
    'role': 'row',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'ncFooterRow',
  providers: [{ provide: CdkFooterRow, useExisting: NcFooterRowComponent }],
})
export class NcFooterRowComponent extends CdkFooterRow { }

@Component({
  selector: 'nc-row, tr[nc-row]',
  template: CDK_ROW_TEMPLATE,
  host: {
    'class': 'nc-row',
    'role': 'row',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'ncRow',
  providers: [{ provide: CdkRow, useExisting: NcRowComponent }],
})
export class NcRowComponent extends CdkRow { }

@Directive({
  selector: 'ng-template[ncNoDataRow]',
  providers: [{provide: CdkNoDataRow, useExisting: NcNoDataRowComponent}],
})
export class NcNoDataRowComponent extends CdkNoDataRow { }
