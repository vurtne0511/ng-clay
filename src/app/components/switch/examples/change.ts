import { Component } from '@angular/core';
import { NcSwitchChange } from '@ng-clay/components/switch';

@Component({
  selector: 'example-switch-change',
  template: `
    <nc-switch (change)="change($event)"></nc-switch>
    <p>{{checked ? '选中' : '未选中'}} 状态</p>
  `
})
export class ExampleSwitchChangeComponent {

      checked: boolean = false;

      change($event: NcSwitchChange<any>) {
        this.checked = $event.checked;
      }

 }
