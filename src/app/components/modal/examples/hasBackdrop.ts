import { Component } from '@angular/core';
import { NcModal } from '@ng-clay/components/modal';

import { ExampleModalComponentContentComponent } from '../examples/content';

@Component({
  selector: 'example-modal-has-backdrop',
  template: `
    <button nc-button (click)="open()">打开模态框</button>
  `,
})
export class ExampleModalHasBackdropComponent {

  constructor(private modal: NcModal) { }

  open() {
    this.modal.open(ExampleModalComponentContentComponent, {
      hasBackdrop: false
    });
  }
}
