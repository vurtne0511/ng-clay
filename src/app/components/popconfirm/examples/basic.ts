import { Component } from '@angular/core';

@Component({
  selector: 'example-popconfirm-basic',
  template: `
    <ng-template #title><i class="text-orange fa fa-exclamation-triangle"></i> 确定要删除吗？</ng-template>
    <a class="button"
      [nc-popconfirm]="title"
      (confirm)="onConfirm()"
      (cancel)="onCancel()">删除</a>
      <br>
    {{ message }}
  `,
  styles: [
    `
    .text-orange { color: orange; }
    `
  ]
})
export class ExamplePopConfirmBasciComponent {

  message = '';

  onConfirm() {
    this.message = '点击确定了';
  }
  onCancel() {
    this.message = '点击取消了';
  }
}
