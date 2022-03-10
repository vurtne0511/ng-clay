import { Component, TemplateRef } from '@angular/core';
import { NcModal } from '@ng-clay/components/modal';

@Component({
  selector: 'example-modal-event',
  template: `
    <button nc-button (click)="open(template)">打开模态框</button>
    <ng-template #template>
      <nc-modal-header>
        模板模态框
      </nc-modal-header>
      <nc-modal-body>
        内容
      </nc-modal-body>
    </ng-template>
  `
})
export class ExampleModalEventComponent {

  constructor(private modal: NcModal) { }

  open(template: TemplateRef<any>) {
    const modal = this.modal.open(template);
    modal.afterOpen().subscribe(() => console.log('afterOpen'));
    modal.backdropClick().subscribe(() => console.log('backdropClick'));
    modal.beforeClose().subscribe(() => console.log('beforeClose'));
    modal.afterClosed().subscribe(() => console.log('afterClosed'));
    modal.keydownEvents().subscribe((event) => console.log(event));
  }
}

