import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nc-example',
  template: `<ng-content></ng-content>`,
  host: {
    'class': 'nc-example'
  },
  encapsulation: ViewEncapsulation.None
})

export class NcExampleComponent { }
