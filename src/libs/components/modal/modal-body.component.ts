import { Component } from '@angular/core';

@Component({
  selector: 'nc-modal-body',
  template: `<ng-content></ng-content>`,
  host: {
    'class': 'nt-modal-body'
  }
})
export class NcModalBodyComponent  { }
