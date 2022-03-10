import { Component } from '@angular/core';
import { NcModal } from '@ng-clay/components/modal';

import { ExampleModalComponentContentComponent } from '../examples/content';

@Component({
  selector: 'example-modal-class',
  template: `
    <button nc-button (click)="open()">打开模态框</button>
  `,
  styles: [`
    .new-backdrop-class {
      background-color: rgba(255,255,255,.9);
      color: #f00;
    }
  `]
})
export class ExampleModalClassComponent {

  constructor(private modal: NcModal) { }

  open() {
    this.modal.open(ExampleModalComponentContentComponent, {
      panelClass: 'new-panel-class',
      backdropClass: 'new-backdrop-class'
    });
  }
}
