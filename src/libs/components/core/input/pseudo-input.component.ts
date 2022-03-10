
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { Attribute, Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nc-pseudo-input',
  template: `
    <div class="nc-pseudo-value" *ngIf="value">{{ value }}</div>
    <div class="nc-pseudo-placeholder" *ngIf="!value">{{ placeholder }}</div>
    <ng-content select="nc-pseudo-caret"></ng-content>
  `,
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'nc-pseudo-input',
    '[class.disabled]': 'disabled',
    '[tabindex]': 'tabIndex'
  }
})
export class NcPseudoInputComponent implements OnInit {

  tabIndex: number;

  private _value!: string;

  @Input()
  get value() { return this._value; }
  set value(value: string) { this._value = value; }

  private _placeholder!: string;

  @Input()
  get placeholder() { return this._placeholder; }
  set placeholder(value: string) { this._placeholder = value; }

  private _disabled = false;

  @Input()
  set disabled(value: BooleanInput) { this._disabled = coerceBooleanProperty(value); }
  get disabled() { return this._disabled; }

  constructor(
    private _elementRef: ElementRef,
    @Attribute('tabindex') tabIndex: string) {
    this.tabIndex = parseInt(tabIndex) || 0;
  }

  ngOnInit() { }
}
