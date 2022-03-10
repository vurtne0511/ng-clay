import { defer, merge, Observable, Subject } from 'rxjs';
import { filter, startWith, switchMap, take, takeUntil } from 'rxjs/operators';

import { Directionality } from '@angular/cdk/bidi';
import {
  _DisposeViewRepeaterStrategy,
  _VIEW_REPEATER_STRATEGY,
  _ViewRepeater
} from '@angular/cdk/collections';
import { Platform } from '@angular/cdk/platform';
import { ViewportRuler } from '@angular/cdk/scrolling';
import {
  _COALESCED_STYLE_SCHEDULER,
  _CoalescedStyleScheduler,
  CDK_TABLE,
  CDK_TABLE_TEMPLATE,
  CdkTable,
  RenderRow,
  RowContext,
  STICKY_POSITIONING_LISTENER,
  StickyPositioningListener
} from '@angular/cdk/table';
import { DOCUMENT } from '@angular/common';
import {
  AfterContentInit,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  IterableDiffers,
  NgZone,
  OnChanges,
  Optional,
  Output,
  QueryList,
  SimpleChanges,
  SkipSelf,
  ViewEncapsulation
} from '@angular/core';

import { NcColumnDirective, NcColumnSort, NcColumnSortChange } from './cell.directive';

@Component({
  selector: 'nc-table, table[nc-table]',
  template: CDK_TABLE_TEMPLATE,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: CDK_TABLE, useExisting: NcTableComponent },
    { provide: _VIEW_REPEATER_STRATEGY, useClass: _DisposeViewRepeaterStrategy },
    { provide: _COALESCED_STYLE_SCHEDULER, useClass: _CoalescedStyleScheduler},
  ],
  host: {
    'class': 'nc-table'
  }
})
export class NcTableComponent<T> extends CdkTable<T> implements AfterContentInit, OnChanges {

  private _multiSortable = false;

  private readonly _destroy = new Subject<void>();

  readonly columSortChanges: Observable<NcColumnSortChange> = defer(() => {

    const contentColumns = this._contentColumns;

    if (contentColumns) {
      return contentColumns.changes.pipe(
        startWith(contentColumns),
        switchMap(() => merge(...contentColumns.map(item => item._sortChange))),
      );
    }

    return this._ngZone!.onStable
      .asObservable()
      .pipe(take(1), switchMap(() => this.columSortChanges));
  });

  private _sort!: string;

  @Input()
  get sort() { return this._sort; }
  set sort(value: string) {
    this._sort = value;
  }

  @ContentChildren(NcColumnDirective) _contentColumns!: QueryList<NcColumnDirective>;

  @Output() readonly sortChange: EventEmitter<NcColumnSortChange | NcColumnSortChange[]> = new EventEmitter();

  constructor(
    protected override _ngZone: NgZone,
    protected override _differs: IterableDiffers,
    protected override _changeDetectorRef: ChangeDetectorRef,
    protected override _elementRef: ElementRef,
    @Attribute('role') _role: string,
    @Optional() protected override readonly _dir: Directionality,
    @Inject(DOCUMENT) _document: any,
    _platform: Platform,
    @Inject(_VIEW_REPEATER_STRATEGY) _viewRepeater: _ViewRepeater<T, RenderRow<T>, RowContext<T>>,
    @Inject(_COALESCED_STYLE_SCHEDULER) _coalescedStyleScheduler: _CoalescedStyleScheduler,
     _viewportRuler: ViewportRuler,
     @Optional() @SkipSelf() @Inject(STICKY_POSITIONING_LISTENER) _stickyPositioningListener: StickyPositioningListener) {
    super(_differs,
          _changeDetectorRef,
          _elementRef,
          _role,
          _dir,
          _document,
          _platform,
          _viewRepeater,
          _coalescedStyleScheduler,
          _viewportRuler,
          _stickyPositioningListener);
  }


  ngAfterContentInit() {
    this._contentColumns.changes.pipe(startWith(null), takeUntil(this._destroy)).subscribe(() => {
      this._resetOptions();
      this._changeDetectorRef.markForCheck();
    });

    this.columSortChanges.pipe(takeUntil(this._destroy)).subscribe(change => {
      this._setSortValue(change.column, change.sort);
    });
    if (this.sort) {
      const [column, sort] = this.sort.split(':');
      if (column) {
        this._checkSortInputAndSetValue(column, sort);
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const change = changes['sort'];
    if (change && !change.firstChange) {
      const currentValue = change.currentValue || '';
      const [column, sort] = currentValue.split(':');
      if (column) {
        this._checkSortInputAndSetValue(column, sort);
      } else {
        this._clearSort();
      }
    }
  }

  private _setSortValue(column: string, sort: string) {
    if (sort && ['asc', 'desc'].includes(sort)) {
      this._sort = `${column}:${sort}`;
    } else {
      this._sort = '';
    }
  }

  private _checkSortInputAndSetValue(column: string, sort: string) {
    const findColumn = this._contentColumns.find(col => col.name === column);
    if (findColumn) {
      findColumn.sort = sort as NcColumnSort;
    }
  }

  private _clearSort(filter?: NcColumnSortChange) {
    this._contentColumns
      .filter(column => column.name !== (filter ? filter.column : ''))
      .forEach(column => column.sort = NcColumnSort.NONE);
    this._changeDetectorRef.markForCheck();
  }

  private _resetOptions() {
    const changedOrDestroyed = merge(this._contentColumns.changes, this._destroy);

    this.columSortChanges
      .pipe(takeUntil(changedOrDestroyed), filter(event => event.isUserInput))
      .subscribe(event => {
        if (!this._multiSortable) {
          this._clearSort(event);
        }
        this.sortChange.emit(event);
      });

    merge(...this._contentColumns.map(column => column._sortChange))
      .pipe(takeUntil(changedOrDestroyed))
      .subscribe(() => this._changeDetectorRef.markForCheck());
  }

  override ngOnDestroy() {
    this._destroy.next();
    this._destroy.complete();
    super.ngOnDestroy();
  }
}
