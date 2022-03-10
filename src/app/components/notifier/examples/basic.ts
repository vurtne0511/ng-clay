import { Component } from '@angular/core';
import { NcNotifier } from '@ng-clay/components/notifier';

@Component({
  selector: 'example-notifier-basic',
  template: `
    <button nc-button color="secondary" (click)="showNotice('default', '默认')">默认</button>
    <button nc-button (click)="showNotice('info', '提示')">提示</button>
    <button nc-button color="success" (click)="showNotice('success', '成功')">成功</button>
    <button nc-button color="warning" (click)="showNotice('warning', '警告')">警告</button>
    <button nc-button color="alert" (click)="showNotice('error', '错误')">错误</button>
  `
})
export class ExampleNotifierBasicComponent {

  constructor(private _notifier: NcNotifier) {
    console.log(_notifier);
  }

  showNotice(type: string, message: string) {
    this._notifier.notify(type, message);
  }
}
