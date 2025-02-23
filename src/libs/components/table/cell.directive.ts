import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  CdkCell,
  CdkCellDef,
  CdkColumnDef,
  CdkFooterCell,
  CdkFooterCellDef,
  CdkHeaderCell,
  CdkHeaderCellDef
} from '@angular/cdk/table';
import { Directive, ElementRef, EventEmitter, Input } from '@angular/core';

export enum NcColumnSort {
  ASC = 'asc',
  DESC = 'desc',
  NONE = ''
}

export class NcColumnSortChange {
  constructor(
    public isUserInput = false,
    public column: string,
    public sort: string) { }
}

/**
 * table 列单元格定义指令
 */
@Directive({
  selector: '[ncCellDef]',
  providers: [{ provide: CdkCellDef, useExisting: NcCellDefDirective }]
})
export class NcCellDefDirective extends CdkCellDef { }

/**
 * table 头部单元格定义指令
 */
@Directive({
  selector: '[ncHeaderCellDef]',
  providers: [{ provide: CdkHeaderCellDef, useExisting: NcHeaderCellDefDirective }]
})
export class NcHeaderCellDefDirective extends CdkHeaderCellDef { }

/**
 * table 底部单元格定义指令
 */
@Directive({
  selector: '[ncFooterCellDef]',
  providers: [{ provide: CdkFooterCellDef, useExisting: NcFooterCellDefDirective }]
})
export class NcFooterCellDefDirective extends CdkFooterCellDef { }

/**
 * table 列定义指令
 */
@Directive({
  selector: 'nc-column, [nc-column]',
  providers: [{ provide: CdkColumnDef, useExisting: NcColumnDirective }],
  inputs: ['name', 'sticky', 'stickyEnd']
})
export class NcColumnDirective extends CdkColumnDef {

  sort: NcColumnSort = NcColumnSort.NONE;

  @Input('nc-column')
  set column(value: string) { this.name = value; }

  private _sortable = false;

  @Input()
  get sortable() { return this._sortable; }
  set sortable(value: BooleanInput) {
    this._sortable = coerceBooleanProperty(value);
  }

  _sortChange: EventEmitter<NcColumnSortChange> = new EventEmitter<NcColumnSortChange>();

  /** 排序操作 */
  sorting(isUserInput = false) {
    if (this.sortable) {

      /** 按照 升 -> 降 -> 无 的循环改变排序 */

      switch (this.sort) {
        case NcColumnSort.ASC:
          this.sort = NcColumnSort.DESC;
          break;
        case NcColumnSort.DESC:
          this.sort = NcColumnSort.NONE;
          break;
        default:
          this.sort = NcColumnSort.ASC;
          break;
      }

      this._sortChange.emit(new NcColumnSortChange(isUserInput, this.name, this.sort));
    }
  }
}

/**
 * table 头部单元格结构指令
 * */
@Directive({
  selector: 'nc-header-cell, th[nc-header-cell]',
  host: {
    'class': 'nc-header-cell',
    '[class.nt-column-sortable]': 'columnDef.sortable',
    '[class.asc]': 'columnDef.sort === "asc"',
    '[class.desc]': 'columnDef.sort === "desc"',
    '(click)': 'columnDef.sorting(true)',
    'role': 'columnheader',
  },
})
export class NcHeaderCellDirective extends CdkHeaderCell {
  constructor(public columnDef: NcColumnDirective, elementRef: ElementRef<HTMLElement>) {
    super(columnDef, elementRef);
    elementRef.nativeElement.classList.add(`nc-column-${columnDef.cssClassFriendlyName}`);
  }
}

/**
 * table 底部单元格结构指令
 * */
@Directive({
  selector: 'nc-footer-cell, td[nc-footer-cell]',
  host: {
    'class': 'nc-footer-cell',
    'role': 'gridcell',
  },
})
export class NcFooterCellDirective extends CdkFooterCell {
  constructor(columnDef: NcColumnDirective, elementRef: ElementRef) {
    super(columnDef, elementRef);
    elementRef.nativeElement.classList.add(`nc-column-${columnDef.cssClassFriendlyName}`);
  }
}

/**
 * table 单元格结构指令
 */
@Directive({
  selector: 'nc-cell, td[nc-cell]',
  host: {
    'class': 'nc-cell',
    'role': 'gridcell',
  },
})
export class NcCellDirective extends CdkCell {
  constructor(columnDef: NcColumnDirective, elementRef: ElementRef<HTMLElement>) {
    super(columnDef, elementRef);
    elementRef.nativeElement.classList.add(`nc-column-${columnDef.cssClassFriendlyName}`);
  }
}
