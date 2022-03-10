import { Component, Inject } from '@angular/core';
import { NC_MODAL_DATA, NcModal, NcModalRef } from '@ng-clay/components/modal';

@Component({
  selector: 'example-modal-component-dialog',
  template: `
    <nc-modal-header> 组件模态框 </nc-modal-header>
    <nc-modal-body>
      <p>次数：{{ count }}</p>
    </nc-modal-body>
    <nc-modal-footer>
      <button class="button small float-right">确定</button>
    </nc-modal-footer>
  `,
})
export class ExampleModalComponentDataComponent {
  public count: number;
  constructor(
    private mdalRef: NcModalRef<any>,
    @Inject(NC_MODAL_DATA) data: any
  ) {
    this.count = data.count || 0;
  }

  close() {
    this.mdalRef.close('关闭');
  }
}

@Component({
  selector: 'example-modal-data',
  template: ` <button class="button" (click)="onOpen()">打开模态框</button> `,
})
export class ExampleModalDataComponent {
  constructor(private modal: NcModal) {}
  onOpen() {
    let modal: NcModalRef<ExampleModalComponentDataComponent> = this.modal.open(
      ExampleModalComponentDataComponent,
      {
        data: {
          count: 0,
        },
      }
    );

    modal.afterOpen().subscribe(() => {
      let count = 1;
      let timer: any = setInterval(() => {
        if (count === 10) {
          clearInterval(timer);
        }
        modal.componentInstance.count = count++;
      }, 1000);
    });
  }
}
