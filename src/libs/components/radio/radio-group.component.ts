import { defer, merge, Observable, Subject } from 'rxjs';
import { startWith, switchMap, take, takeUntil } from 'rxjs/operators';

import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  isDevMode,
  NgZone,
  OnDestroy,
  Optional,
  QueryList,
  Self,
  ViewEncapsulation,
  Output
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { NcFormFieldControl } from '@ng-clay/components/forms';

import { NcRadioChange, NcRadioComponent } from './radio.component';

export function getNtRdioGroupNonFunctionValueError() {
  return Error('`compareWith` must be a function.');
}

let uniqueId = 0;

@Component({
  selector: 'nc-radio-group',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NcFormFieldControl, useExisting: NcRadioGroupComponent }
  ],
  host: {
    'class': 'nc-radio-group'
  }
})
export class NcRadioGroupComponent<T>
  implements ControlValueAccessor, AfterViewInit, OnDestroy,  NcFormFieldControl<T> {

  readonly id: string = `nc-radio-group-${uniqueId++}`;

  private readonly _destroy = new Subject<void>();

  private _value: T | null | undefined;
  private _disabled = false;
  private _readonly = false;
  private _required = false;

  private _name: string = this.id;

  get value() { return this._value; }

  @Input()
  set disabled(value: BooleanInput) { this._disabled = coerceBooleanProperty(value); }
  get disabled() { return this._disabled; }

  @Input()
  get required(): boolean { return this._required; }
  set required(value: BooleanInput) { this._required = coerceBooleanProperty(value); }

  @Input()
  set readonly(value: BooleanInput) { this._readonly = coerceBooleanProperty(value); }
  get readonly() { return this._readonly; }

  @Input()
  get name(): string { return this._name; }
  set name(value: string) {
    this._name = value;
    this._updateRadioButtonNames();
  }

  @ContentChildren(NcRadioComponent) radios!: QueryList<NcRadioComponent<T>>;

  private _compareWith = (o1: any, o2: any) => o1 === o2;

  @Input()
  set compareWith(fn: (o1: any, o2: any) => boolean) {
    if (typeof fn !== 'function') {
      throw getNtRdioGroupNonFunctionValueError();
    } else {
      this._compareWith = fn;
    }
  }

  @Output() readonly checkedChanges: Observable<NcRadioChange<T>> = defer(() => {
    const radios = this.radios;

    if (radios) {
      return radios.changes.pipe(
        startWith(radios),
        switchMap(() => merge(...radios.map(item => item.change))),
      );
    }

    return this._ngZone.onStable
      .asObservable()
      .pipe(take(1), switchMap(() => this.checkedChanges));
  });

  /** Emits when the value changes (either due to user input or programmatic change). */
  private _onChange: (value: any) => void = () => { };
  private _onTouched = () => { };

  constructor(
    private _ngZone: NgZone,
    private _changeDetectorRef: ChangeDetectorRef,
    @Self() @Optional() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngAfterViewInit() {
    this.radios.changes.pipe(startWith(null), takeUntil(this._destroy)).subscribe(() => {
      this._resetRadios();
      this._initializeChecked();
    });
  }

  ngOnDestroy() {
    this._destroy.next();
    this._destroy.complete();
  }

  writeValue(value: T) {
    if (this.radios) {
      this._setCheckedByValue(value);
    }
  }

  registerOnChange(fn: (_: any) => {}) {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => {}) {
    this._onTouched = fn;
  }

  focus() {
    if (!this.disabled) {
      this._onTouched();
    }
  }

  private _initializeChecked(): void {
    Promise.resolve().then(() => {
      this._updateRadioButtonNames();
      this._setCheckedByValue(this.ngControl ? this.ngControl.value : this.value);
    });
  }

  private _resetRadios() {

    const changedOrDestroyed = merge(this.radios.changes, this._destroy);

    this.checkedChanges.pipe(takeUntil(changedOrDestroyed)).subscribe(change => {
      this._setValues(change.source);
    });

    merge(...this.radios.map(item => item.change))
      .pipe(takeUntil(changedOrDestroyed))
      .subscribe(() => {
        this._changeDetectorRef.markForCheck();
      });
  }

  private _setCheckedByValue(value: T) {
    this._value = value;
    this.radios.forEach(item => item.checked = false);
    this._checkedValue(value);
    this._changeDetectorRef.markForCheck();
  }

  private _checkedValue(value: any): NcRadioComponent<T> | undefined {
    const correspondingItem = this.radios.find((item: NcRadioComponent<T>) => {
      try {
        return item.value != null && this._compareWith(item.value, value);
      } catch (error) {
        if (isDevMode()) {
          console.warn(error);
        }
        return false;
      }
    });
    if (correspondingItem) {
      correspondingItem.checked = true;
    }
    return correspondingItem;
  }

  private _setValues(radio: NcRadioComponent<T>): void {

    this._value = radio.value;
    this._onChange(this._value);
    this._onTouched();
    this._changeDetectorRef.markForCheck();
  }

  private _updateRadioButtonNames(): void {
    if (this.radios) {
      this.radios.forEach(radio => {
        radio.name = this.name;
      });
    }
  }
}
