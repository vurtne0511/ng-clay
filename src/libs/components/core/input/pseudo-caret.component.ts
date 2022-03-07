
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nc-pseudo-caret',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'nc-pseudo-caret'
  }
})
export class NcPseudoCaretComponent { }
