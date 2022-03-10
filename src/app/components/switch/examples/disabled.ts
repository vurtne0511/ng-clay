import { Component } from '@angular/core';

@Component({
  selector: 'example-switch-disabled',
  template: `
    <nc-switch></nc-switch><br>
    <nc-switch disabled="true"></nc-switch>
  `
})
export class ExampleSwitchDisabledComponent { }
