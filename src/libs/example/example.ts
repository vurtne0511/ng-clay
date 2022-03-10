import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nc-example',
  template: `<ng-content></ng-content>`,
  styleUrls: ['example.css'],
  host: {
    'class': 'nc-example'
  },
  encapsulation: ViewEncapsulation.None
})

export class NcExampleComponent { }
