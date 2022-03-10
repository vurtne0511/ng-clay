import { Component } from '@angular/core';

@Component({
  selector: 'example-switch-size',
  template: `
    <nc-switch class="tiny"></nc-switch><br>
    <nc-switch></nc-switch><br>
    <nc-switch class=large></nc-switch>
  `
})
export class ExampleSwitchSizeComponent { }
