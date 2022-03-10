import { Component } from '@angular/core';

@Component({
  selector: 'example-dropdown-trigger',
  template: `
    <a nc-dropdown position="top">
      移入触发
      <nc-dropdown-pane arrow autosize>弹出层</nc-dropdown-pane>
    </a><br>

    <a nc-dropdown position="bottom"  trigger="click">
      点击触发
      <nc-dropdown-pane arrow autosize>弹出层</nc-dropdown-pane>
    </a><br>
  `
})
export class ExampleDropdownTriggerComponent {
}
