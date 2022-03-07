import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nc-button-group, [nc-button-group]',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class]': '["button-group", color, size, class].join(" ")',
    '[class.expanded]': 'expanded'
  }
})
export class NcButtonGroupComponent {

  private _expanded: boolean = false;

  @Input() class: string = '';

  @Input() color: string = '';

  @Input() size: string = '';

  @Input()
  set expanded(value: boolean) { this._expanded = coerceBooleanProperty(value); }
  get expanded() { return this._expanded; }
}
