
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nc-label, [nc-label]',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class]': '["label", color].join(" ")'
  }
})
export class NcLabelComponent {

  @Input() color: string = '';
}
