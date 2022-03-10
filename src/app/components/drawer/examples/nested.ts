import { Component } from '@angular/core';

@Component({
  selector: 'example-drawer-nested',
  template: `
    <button nc-button (click)="drawer.open()">打开</button>
    <div class="drawer-container padding-1" nc-drawer-container>
      drawer 容器
      <nc-drawer #drawer class="padding-1">
        特定容器下的 drawer 弹出层
      </nc-drawer>
    </div>
  `,
  styles: [`
    .drawer-container {
      width: 100%;
      height: 300px;
      border: 1px solid #ddd;
    }
  `]
})
export class ExampleDrawerNestedComponent { }
