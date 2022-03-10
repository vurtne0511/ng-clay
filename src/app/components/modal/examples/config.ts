import { Component } from '@angular/core';
import { NcModal } from '@ng-clay/components/modal';

@Component({
  selector: 'example-modal-config',
  template: `
  <ng-container cdkPortalOutlet></ng-container>
  <button nc-button (click)="openForTtemplate()">打开模态框</button>
  `
})
export class ExampleModalConfigComponent {



  constructor(
    private ntModal: NcModal) { }

  openForTtemplate() {
    // let modal = this.ntModal.open(ExampleModalComponentContentComponent, {
    //   viewContainerRef: this.container
    // });
    // modal.afterClosed().subscribe((res) => {
    //     console.log(res);
    // });
  }

}
