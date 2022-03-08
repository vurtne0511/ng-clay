import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nc-input-group, [nt-input-group]',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'nt-input-group input-group',
    '[class.nt-input-group-transparent]': 'transparent'
  }
})
export class NcInputGroupComponent {

  private _transparent: boolean = false;

  @Input()
  get transparent() { return this._transparent; }
  set transparent(value: boolean) {
    this._transparent = coerceBooleanProperty(value);
  }
}
