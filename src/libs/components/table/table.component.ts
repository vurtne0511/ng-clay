import { defer, merge, Observable, Subject } from 'rxjs';
import { filter, startWith, switchMap, take, takeUntil } from 'rxjs/operators';

import { CDK_TABLE, CDK_TABLE_TEMPLATE, CdkTable } from '@angular/cdk/table';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

import { NcColumnDirective, NcColumnSort, NcColumnSortChange } from './cell.directive';

@Component({
  selector: 'nc-table, table[nc-table]',
  template: CDK_TABLE_TEMPLATE,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: CdkTable, useExisting: NcTableComponent },
    { provide: CDK_TABLE, useExisting: NcTableComponent },
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

    return super._ngZone!.onStable
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
