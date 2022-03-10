import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nc-input-addon, [nc-input-addon]',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'nc-input-addon input-group-label'
  }
})
export class NcInputAddonComponent { }

