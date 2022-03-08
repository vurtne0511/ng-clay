import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nc-input-addon, [nt-input-addon]',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'nt-input-addon input-group-label'
  }
})
export class NcInputAddonComponent { }

