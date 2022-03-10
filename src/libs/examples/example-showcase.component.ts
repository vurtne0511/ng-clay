import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nc-example-showcase',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'nc-example-showcase'
  }
})
export class NcExampleShowcaseComponent { }
