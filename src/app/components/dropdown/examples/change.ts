import { Component } from '@angular/core';

@Component({
  selector: 'example-dropdown-change',
  styles: [
    `
      .example-events {
        width: 90%;
        height: 100px;
        overflow: auto;
        margin-bottom: 10px;
      }
    `
  ],
  template: `
    <div class="example-events">
      <div *ngFor="let e of events">{{e}}</div>
    </div>

    <a nc-dropdown position="bottom"
      (afterOpen)="afterOpen()"
      (afterClosed)="afterClosed()"
      (beforeOpen)="beforeOpen()"
      (beforeClosed)="beforeClosed()"
    >
    下拉菜单
    <nc-dropdown-pane arrow autosize>基本下拉菜单弹出层</nc-dropdown-pane>
    </a>

  `
})
export class ExampleDropdownChangeComponent {
  events: string[] = [];

  // 弹出层显示后
  afterOpen() {
    this.events.push('触发弹出层显示后事件回调');
  }

  // 弹出层消失后
  afterClosed() {
    this.events.push('触发弹出层消失后事件回调');
  }

  // 弹出层显示前
  beforeOpen() {
    this.events.push('触发弹出层显示前事件回调');
  }

  // 弹出层消失前
  beforeClosed() {
    this.events.push('触发弹出层消失前事件回调');
  }

}
