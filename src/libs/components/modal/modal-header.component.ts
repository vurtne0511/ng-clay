import { Component } from '@angular/core';

@Component({
  selector: 'nc-modal-header',
  template: `<ng-content></ng-content>`,
  host: {
    class: 'nc-modal-header'
  }
})
export class NcModalHeaderComponent  { }
