import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { transition, trigger } from '@angular/animations';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  CdkOverlayOrigin,
  ConnectedOverlayPositionChange,
  ConnectionPositionPair
} from '@angular/cdk/overlay';
import { CdkPortalOutlet, ComponentPortal, Portal } from '@angular/cdk/portal';
import {
  AfterViewInit,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  Optional,
  Output,
  Self,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { NgControl, ValidatorFn } from '@angular/forms';
import {
  DateAdapter,
  fadeIn,
  fadeOut,
  NC_DATE_FORMATS,
  NcDateFormats
} from '@ng-clay/components/core';
import { NtFormFieldControl } from '@ng-clay/components/forms';
import { BOTTOM_LEFT, NcOverlayComponent, TOP_LEFT } from '@ng-clay/components/overlay';

import { NcCalendarCellClassFunction } from './calendar-body.component';
import { NcDatePickerContent } from './datepicker-content.component';
import { DateFilterFn, NC_DATE_PICKER_CONTROL, NcDatePickerControl } from './datepicker-control';
import {
  DEFAULT_DATEPICKER_ICONS,
  NT_DATEPICKER_ICONS,
  NcDatePickerIcons
} from './datepicker-icons';
import { NcDatePickerInputBase } from './datepicker-input-base';
import { NT_SINGLE_DATE_SELECTION_MODEL_PROVIDER, NcDateSelectionModel } from './selections';

let datepickerUid = 0;

// const _NcDatePickerInputBase: NcOverlayControlCtor &
//   typeof NcDatePickerInputBase = mixinOverlayControl(NcDatePickerInputBase);

@Component({
  selector: 'nc-datepicker',
  templateUrl: 'datepicker.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'nt-datepicker',
    '(click)': '_onClick($event)',
  },
  animations: [
    trigger('fade', [
      transition('* => void', fadeOut(.15)),
      transition('void => *', fadeIn(.15))
    ])
  ],
  providers: [
    { provide: NtFormFieldControl, useExisting: NcDatePicker },
    { provide: NC_DATE_PICKER_CONTROL, useExisting: NcDatePicker },
    NT_SINGLE_DATE_SELECTION_MODEL_PROVIDER
  ]
})
export class NcDatePicker<D> extends NcDatePickerInputBase<D | null, D>
  implements NtFormFieldControl<D>, NcDatePickerControl<D>, AfterViewInit, OnChanges, OnDestroy {

  private _overlayToggle = new Subject<boolean>();

  _displayValue = '';

  id: string = `nc-datepicker-${datepickerUid++}`;

  tabIndex: number;

  _portal: Portal<any>;

  _positionPairs: ConnectionPositionPair[] = [BOTTOM_LEFT, TOP_LEFT];

  private _startAt: D | null;

  @Input()
  get startAt(): D | null { return this._startAt || this._getStartValue(); }
  set startAt(value: D | null) { this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)); }

  private _min: D | null;

  @Input()
  get min(): D | null { return this._min; }
  set min(value: D | null) { this._min = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)); }

  private _max: D | null;

  @Input()
  get max(): D | null { return this._max; }
  set max(value: D | null) { this._max = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)); }

  private _placeholder = '';

  @Input()
  set placeholder(value: string) { this._placeholder = value; }
  get placeholder() { return this._placeholder; }

  private _readonly = false;

  @Input()
  set readonly(value: boolean) { this._readonly = coerceBooleanProperty(value); }
  get readonly() { return this._readonly; }

    /** Function that can be used to add custom CSS classes to dates. */
  @Input() dateClass: NcCalendarCellClassFunction<D>;

  @Input() dateFilter: (date: D) => boolean;

  @Output() afterOpen = new EventEmitter<any>();
  @Output() afterClosed = new EventEmitter<any>();

  @Output() beforeOpen = new EventEmitter<any>();
  @Output() beforeClosed = new EventEmitter<any>();

  @Output() positionChange = new EventEmitter<ConnectedOverlayPositionChange>();

  @ViewChild(NcOverlayComponent, { static: true }) overlay: NcOverlayComponent;

  @ViewChild(CdkPortalOutlet, { static: true }) _portalOutlet: CdkPortalOutlet;

  _validator: ValidatorFn;

  readonly origin: CdkOverlayOrigin;

  readonly _stateChanges = new Subject<void>();

  constructor(
    public _elementRef: ElementRef,
    @Attribute('tabindex') tabIndex: string,
    @Optional() @Inject(NT_DATEPICKER_ICONS) public  icons: NcDatePickerIcons,
    @Inject(NC_DATE_FORMATS) private  _dateFormats: NcDateFormats,
    private _changeDetectorRef: ChangeDetectorRef,
    dateAdapter: DateAdapter<D>,
    _model: NcDateSelectionModel<D, D>,
    @Optional() @Self() public ngControl: NgControl) {

    super(dateAdapter);

    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }

    this._registerModel(_model);

    this.origin = new CdkOverlayOrigin(_elementRef);

    this.icons = { ...DEFAULT_DATEPICKER_ICONS, ...icons };

    this.tabIndex = parseInt(tabIndex) || 0;

    this._overlayToggle.pipe(debounceTime(10)).subscribe(open => open
      ? this.overlay.open()
      : this.overlay.toggle()
    );

    this._model.selectionChanged.subscribe(value => {
      this._formatValue(value.selection);
    });
  }
  focused?: boolean;
  empty?: boolean;


  getErrors() {
    return this.ngControl?.errors;
  }

  _isActivated(): boolean {
    return !this.disabled;
  }

  ngAfterViewInit() {
    this._changeDetectorRef.markForCheck();
  }

  ngOnChanges(changes: SimpleChanges) {
    const change = changes.value || changes.startAt || changes.minDate || changes.maxDate;
    if(change && !change.firstChange) {
      this._changeDetectorRef.markForCheck();
    }
    this._stateChanges.next(undefined);
  }

  ngOnDestroy() {
    this._stateChanges.complete();
  }

  focus() {
    this.overlay.open();
  }

  select(date: D): void {
    this._model.add(date);
  }

  _onAfterOpen(event: any) {
    this.afterOpen.next(event);
  }

  _onAfterClosed(event: any) {
    this.afterClosed.next(event);
    this._portal.detach();
  }

  _onBeforeOpen(event: any) {
    this._portal = new ComponentPortal(NcDatePickerContent);
    this.beforeOpen.next(event);
  }

  _onBeforeClosed(event: any) {
    this.beforeClosed.next(event);
  }

  _onPositionChange(change: ConnectedOverlayPositionChange) {
    this.positionChange.next(change);
  }

  _onClick(event: Event) {
    if (!this.disabled) {
      this.overlay.toggle();
    }
    event.stopPropagation();
  }

  _onClear(event: Event) {
    if (!this.disabled) {
      this._model.updateSelection(this._getDefaultModelValue(), this);
    }
    event.stopPropagation();
  }

  _assignValueToModel(value: D | null): void {
    if (this._model) {
      value = this._dateAdapter.deserialize(value);
      this._model.updateSelection(value, this);
      this._valueChange(value);
    }
  }

  _getValueFromModel(modelValue: D): D {
    return modelValue;
  }

  _getMinDate(): D | null {
    return this.min;
  }

  _getMaxDate(): D | null {
    return this.max;
  }

  _getDateFilter(): DateFilterFn<D> {
    return this.dateFilter;
  }

  _getStartValue() { return this._model?.selection; }

  protected _formatValue(modelValue: D | null) {
    if(modelValue) {
      this._displayValue = this._dateAdapter.format(modelValue, this._dateFormats.display.dateInput);
    } else {
      this._displayValue = '';
    }
  }

  protected _getDefaultModelValue(): D | null {
    return null;
  }
}
