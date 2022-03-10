import { Component } from '@angular/core';

@Component({
  selector: 'example-drawer-backdrop',
  template: `
    <button nc-button (click)="drawer.open()">打开</button>
    <nc-drawer #drawer class="padding-1" backdrop="true">
      drawer 弹出层
    </nc-drawer>
  `
})
export class ExampleDrawerBackdropComponent { }
