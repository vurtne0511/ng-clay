import { Component } from '@angular/core';

@Component({
  selector: 'example-dropdown-basic',
  template: `
    <a nc-dropdown position="top">
      基本下拉菜单
      <nc-dropdown-pane arrow autosize>{{content}}</nc-dropdown-pane>
    </a>
  `
})
export class ExampleDropdownBasicComponent {
    content = '基本下拉菜单弹出层';
}
