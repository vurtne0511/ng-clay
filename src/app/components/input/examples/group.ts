import { Component } from '@angular/core';

@Component({
  selector: 'example-input-group',
  template: `
  <nc-input-group>
    <nc-input-addon>https://</nc-input-addon>
    <input ntInput type="text"/>
    <nc-input-addon>.com</nc-input-addon>
  </nc-input-group>
  <nc-input-group transparent="true">
    <nc-input-addon>https://</nc-input-addon>
    <input ntInput type="text"/>
    <nc-input-addon>.com</nc-input-addon>
  </nc-input-group>
  `
})
export class ExampleInputGroupComponent { }
