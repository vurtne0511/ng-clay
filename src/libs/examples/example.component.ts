import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nc-example',
  template: `<ng-content></ng-content>`,
  host: {
    'class': 'nt-example'
  },
  encapsulation: ViewEncapsulation.None
})

export class NcExampleComponent { }
