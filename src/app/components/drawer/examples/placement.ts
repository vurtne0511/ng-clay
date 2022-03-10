import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'example-drawer-placement',
  template: `
    <nc-radio-group [formControl]="placement">
      <nc-radio value="left">左</nc-radio>
      <nc-radio value="right">右</nc-radio>
      <nc-radio value="top">上</nc-radio>
      <nc-radio value="bottom">下</nc-radio>
    </nc-radio-group>
    <button nc-button (click)="drawer.open()">打开</button>
    <nc-drawer #drawer class="padding-1" [placement]="placement.value">
      drawer 弹出层
    </nc-drawer>
  `
})
export class ExampleDrawerPlacementComponent {
  placement = new FormControl('left');
}
