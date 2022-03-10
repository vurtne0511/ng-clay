import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[nc-button]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['button.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class]': '["nc-button", "bg-cyan-600", "hover:bg-cyan-800", "focus:bg-cyan-800"]',
    '[class.expanded]': 'expanded'
  }
})
export class NcButtonComponent {

  private _expanded: boolean = false;

  @Input() color: string = '';

  @Input() size: string = '';

  @Input()
  set expanded(value: BooleanInput) { this._expanded = coerceBooleanProperty(value); }
  get expanded() { return this._expanded; }
}
