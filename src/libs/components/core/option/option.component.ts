import { Subject } from 'rxjs';

import { Highlightable, ListKeyManagerOption } from '@angular/cdk/a11y';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Input,
  Optional,
  Output,
  ViewEncapsulation
} from '@angular/core';

export interface NcOptionParentComponent {
  disabled?: boolean;
  multiple?: boolean;
}

export class NcOptionSelectionChange {
  constructor(
    public source: NcOptionComponent,
    public isUserInput = false) { }
}

export const NC_OPTION_PARENC_COMPONENT = new InjectionToken<NcOptionParentComponent>('nc-option-parent-component');

@Component({
  selector: 'nc-option',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'nc-option',
    '[class.nt-option-selected]': 'selected',
    '[class.nt-option-disabled]': 'disabled',
    '[class.nt-option-active]': '_isActive',
    '[class.nt-option-hidden]': 'hidden',
    '(click)': 'selectViaInteraction()'
  }
})
export class NcOptionComponent implements AfterViewChecked, Highlightable, ListKeyManagerOption {

  private _mostRecentViewValue = '';

  _isActive = false;

  private _label = '';

  @Input()
  set label(value: string) { this._label = value; }
  get label() {
    if (!this._label.trim()) {
      return (this._element.nativeElement.textContent || '').trim();
    }
    return this._label.trim();
  }

  get multiple() { return this._parent && this._parent.multiple; }

  private _value: any;

  @Input()
  set value(value: any) { this._value = value; }
  get value() { return this._value; }

  private _disabled = false;

  @Input()
  get disabled(): boolean { return this._disabled || this.hidden; }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }

  private _hidden = false;

  get hidden(): boolean { return this._hidden; }
  set hidden(value: BooleanInput) {
    this._hidden = coerceBooleanProperty(value);
  }

  private _selected = false;

  get selected() { return this._selected; }

  readonly stateChanges = new Subject<void>();

  @Output() readonly selectionChange = new EventEmitter<NcOptionSelectionChange>();

  constructor(
    private _element: ElementRef,
    private _changeDetectorRef: ChangeDetectorRef,
    @Optional() @Inject(NC_OPTION_PARENC_COMPONENT) private _parent: NcOptionParentComponent) { }

  ngAfterViewChecked() {
    if (this._selected) {
      const viewValue = this.label;
      if (viewValue !== this._mostRecentViewValue) {
        this._mostRecentViewValue = viewValue;
        this.stateChanges.next();
      }
    }
  }

  focus() {
    const element = this._element.nativeElement;
    if (typeof element.focus === 'function') {
      element.focus();
    }
  }

  select() {
    this._selected = true;
    this._changeDetectorRef.markForCheck();
    this._emitSelectionChangeEvent();
  }

  deselect() {
    this._selected = false;
    this._changeDetectorRef.markForCheck();
    this._emitSelectionChangeEvent();
  }

  selectViaInteraction() {
    if (!this.disabled) {
      this._selected = this.multiple ? !this._selected : true;
      this._emitSelectionChangeEvent(true);
    }
  }

  setActiveStyles() {
    this._isActive = true;
  }

  setInactiveStyles() {
    this._isActive = false;
  }

  getLabel() {
    return this.label;
  }

  getOffsetTop() {
    return this._element.nativeElement.offsetTop;
  }

  getOffsetHeight() {
    return this._element.nativeElement.offsetHeight;
  }

  protected _emitSelectionChangeEvent(isUserInput = false): void {
    this.selectionChange.emit(new NcOptionSelectionChange(this, isUserInput));
  }
}
