import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  QueryList,
  ViewEncapsulation
} from '@angular/core';

export declare type NtMenuAlign = '' | 'center' | 'right';
export declare type NtMenuOrientation = '' | 'horizontal' | 'vertical';

@Component({
  selector: 'ul[nc-menu], ol[nc-menu]',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class]': '["menu", align ? "align-" + align : "", orientation].join(" ")',
    '[class.simple]': 'simple',
    '[class.expanded]': 'expanded',
    '[class.nested]': 'nested'
  }
})
export class NcMenuComponent implements AfterContentInit {

  private _simple: boolean = false;
  private _expanded: boolean = false;
  private _nested: boolean = false;
  private _align: NtMenuAlign = '';

  @Input()
  set simple(value: BooleanInput) { this._simple = coerceBooleanProperty(value); }
  get simple() { return this._simple; }

  @Input()
  set expanded(value: BooleanInput) { this._expanded = coerceBooleanProperty(value); }
  get expanded() { return this._expanded; }

  set nested(value: BooleanInput) { this._nested = coerceBooleanProperty(value); }
  get nested() { return this._nested; }

  @Input()
  set align(value: NtMenuAlign) { this._align = value; }
  get align() { return this._align; }

  @Input() orientation: NtMenuOrientation = '';

  @ContentChildren(NcMenuComponent) childMenus!: QueryList<NcMenuComponent>;

  constructor() { }

  ngAfterContentInit() {
    this.childMenus.toArray()
      .filter(menu => menu !== this)
      .forEach(menu => menu.nested = true);
  }
}
