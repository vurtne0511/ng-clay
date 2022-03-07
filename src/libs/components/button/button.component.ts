import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[nc-button]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['button.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class]': '["nc-button", "bg-"+color+"-600", "hover:bg-"+ color +"-800", "focus:bg-"+ color +"-800"]',
    '[class.expanded]': 'expanded'
  }
})
export class NcButtonComponent {

  // _static_classes = [text-white px-4 py-2 rounded-md text-1xl font-medium];
  // bg-[var(--colors-{{ color }})]-600  hover:bg-{{ color }}-800

  private _expanded: boolean = false;

  @Input() color: string = '';

  @Input() size: string = '';

  @Input()
  set expanded(value: boolean) { this._expanded = coerceBooleanProperty(value); }
  get expanded() { return this._expanded; }
}
