import { Component } from '@angular/core';

@Component({
  selector: 'nc-modal-footer',
  template: `<ng-content></ng-content>`,
  host: {
    'class': 'nt-modal-footer'
  }
})
export class NcModalFooterComponent  { }
