import {
  CDK_ROW_TEMPLATE,
  CdkFooterRow,
  CdkFooterRowDef,
  CdkHeaderRow,
  CdkHeaderRowDef,
  CdkRow,
  CdkRowDef
} from '@angular/cdk/table';
import { ChangeDetectionStrategy, Component, Directive, ViewEncapsulation } from '@angular/core';

@Directive({
  selector: '[ncHeaderRowDef]',
  providers: [{ provide: CdkHeaderRowDef, useExisting: NtHeaderRowDefDirective }],
  inputs: ['columns: ntHeaderRowDef', 'sticky: ntHeaderRowDefSticky'],
})
export class NcHeaderRowDefDirective extends CdkHeaderRowDef { }

@Directive({
  selector: '[ncFooterRowDef]',
  providers: [{ provide: CdkFooterRowDef, useExisting: NcFooterRowDefDirective }],
  inputs: ['columns: NcFooterRowDef', 'sticky: NcFooterRowDefSticky'],
})
export class NcFooterRowDefDirective extends CdkFooterRowDef { }

@Directive({
  selector: '[ncRowDef]',
  providers: [{ provide: CdkRowDef, useExisting: NtRowDefDirective }],
  inputs: ['columns: ntRowDefColumns', 'when: ntRowDefWhen'],
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
  providers: [{ provide: CdkHeaderRow, useExisting: NtHeaderRowComponent }],
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
  providers: [{ provide: CdkRow, useExisting: NtRowComponent }],
})
export class NcRowComponent extends CdkRow { }
