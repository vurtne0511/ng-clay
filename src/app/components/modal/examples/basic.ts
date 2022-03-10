import { Component, TemplateRef } from '@angular/core';
import { NcModal } from '@ng-clay/components/modal';

const content = `
Modal dialogs, or pop-up windows, are handy for prototyping and production.
Foundation includes Reveal, our jQuery modal plugin, to make this easy for you.
`;

@Component({
  selector: 'example-modal-component-dialog',
  template: `
    <nc-modal-header>
      组件模态框
    </nc-modal-header>
    <nc-modal-body>
      {{ content }}
    </nc-modal-body>
    <nc-modal-footer>
      <button class="button small float-right">确定</button>
    </nc-modal-footer>
  `
})
export class ExampleModalComponentDialogComponent {
  content = content;
}

@Component({
  selector: 'example-modal-basic',
  template: `
    <button class="margin-right-1" nc-button (click)="openForTemplate(template)">模板模态框</button>
    <button nc-button (click)="openForComponent()">组件模态框</button>
    <ng-template #template>
      <nc-modal-header>
      模板模态框
      </nc-modal-header>
      <nc-modal-body>
        {{ content }}
      </nc-modal-body>
    </ng-template>
  `
})
export class ExampleModalBasicComponent {

  content = content;

  constructor(private modal: NcModal) { }

  openForTemplate(template: TemplateRef<any>) {
    this.modal.open(template);
  }

  openForComponent() {
    this.modal.open(ExampleModalComponentDialogComponent);
  }
}
