import { coerceNumberProperty } from '@angular/cdk/coercion';
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  Optional,
  Output,
  SimpleChanges,
  ViewEncapsulation,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';

import { NC_PAGINATION_CONFIG, NcPaginationConfig } from './pagination-config';

export const PAGINATION_ELLIPSIS = '...';

@Component({
  selector: 'nc-pagination',
  templateUrl: 'pagination.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NcPaginationComponent implements OnInit, OnChanges {


  private _totalPage = 1;

  get totalPage() { return this._totalPage; }

  private _pageItems: any[] = [1];

  get pageItems() { return this._pageItems; }

  private _options = new NcPaginationConfig();

  @Input()
  get options() { return this._options; }
  set options(value: NcPaginationConfig) {
    if (typeof value === 'object') {
      this._options = Object.assign({}, this._options, value);
    }
  }

  get itemSize() { return this.options.itemSize; }

  @Input()
  set pageSize(value: number) { this._options.pageSize = coerceNumberProperty(value); }
  get pageSize() { return this.options.pageSize; }

  @Input()
  set previousLabel(value: string) { this._options.previousLabel = value; }
  get previousLabel() { return this.options.previousLabel; }

  @Input()
  set nextLabel(value: string) { this._options.nextLabel = value; }
  get nextLabel() { return this.options.nextLabel; }

  private _total = 0;

  @Input()
  set total(value: number) { this._total = coerceNumberProperty(value); }
  get total() { return this._total; }

  private _pageIndex = 1;

  @Input()
  set pageIndex(value: number) { this._pageIndex = coerceNumberProperty(value, 1); }
  get pageIndex() { return this._pageIndex; }

  @Output() pageChange = new EventEmitter<number>();

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    @Optional() @Inject(NC_PAGINATION_CONFIG) defaultConfig?: NcPaginationConfig,
    ) {
    this._options = { ...this._options, ...defaultConfig || {} };
  }

  ngOnInit() {
    this._calcPageItems();
  }

  ngOnChanges(changes: SimpleChanges) {
    const change = changes['total'] || changes['pageIndex'];
    if (change && !change.firstChange) {
      this._calcPageItems();
    }
  }

  _pageChange(index: number) {
    this.pageIndex = coerceNumberProperty(index, 1);
    this.pageChange.emit(this.pageIndex);
  }

  private _calcPageItems() {

    this._totalPage = Math.ceil(this.total / this.pageSize);

    let pageItems: any[] = [1];

    /** 当新的总页数少于原来的索引时将 */
    if (this.pageIndex > this._totalPage) {
      this._pageIndex = this._totalPage;
      // this.pageChange.emit(this.pageIndex);
    }

    if (this._totalPage > 1) {

      let [start, end] = [
        Math.max(this.pageIndex - this.itemSize, 2),
        Math.min(this.pageIndex + this.itemSize, this.totalPage - 1)
      ];

      if (start - 2 >= 1) {
        pageItems.push(PAGINATION_ELLIPSIS)
      }

      pageItems = pageItems.concat(Array(end - start + 1).fill(start).map((v, i) => v + i));

      if (end + 2 <= this.totalPage) {
        pageItems.push(PAGINATION_ELLIPSIS)
      }

      if (this.totalPage > 1) {
        pageItems.push(this.totalPage);
      }
    }

    this._pageItems = pageItems;
  }
}
