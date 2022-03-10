import { Component, Inject } from '@angular/core';
import { NC_MODAL_DATA, NcModalRef } from '@ng-clay/components/modal';

const content = `
Modal dialogs, or pop-up windows, are handy for prototyping and production.
Foundation includes Reveal, our jQuery modal plugin, to make this easy for you.
`;

@Component({
  selector: 'example-modal-component-content',
  template: `
    <nc-modal-header>
      组件模态框
    </nc-modal-header>
    <nc-modal-body>
      {{ content }}
    </nc-modal-body>
    <nc-modal-footer>
      <button class="button small float-right" (click)="close()">确定</button>
    </nc-modal-footer>
  `
})
export class ExampleModalComponentContentComponent {

  content: string;

  constructor(
    private modalRef: NcModalRef<any>,
    @Inject(NC_MODAL_DATA) data: any
  ) {
    this.content = (data && data.content) || content;
  }

  close() {
    this.modalRef.close('关闭');
  }
}
