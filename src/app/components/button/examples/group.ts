import { Component } from '@angular/core';

@Component({
  selector: 'example-button-group',
  template: `
    <nc-button-group>
      <button nc-button>按钮1</button>
      <button nc-button>按钮2</button>
      <button nc-button>按钮3</button>
    </nc-button-group>
    <nc-button-group color="success">
      <button nc-button>按钮1</button>
      <button nc-button>按钮2</button>
      <button nc-button>按钮3</button>
    </nc-button-group>
    <nc-button-group size="small">
      <button nc-button>按钮1</button>
      <button nc-button>按钮2</button>
      <button nc-button>按钮3</button>
    </nc-button-group>
    <nc-button-group size="tiny">
      <button nc-button>按钮1</button>
      <button nc-button>按钮2</button>
      <button nc-button>按钮3</button>
    </nc-button-group>
    <nc-button-group>
      <button nc-button color="purple">按钮0</button>
      <button nc-button>按钮1</button>
      <button nc-button color="secondary">按钮2</button>
      <button nc-button color="warning">按钮3</button>
      <button nc-button color="success">按钮4</button>
      <button nc-button color="alert">按钮5</button>
    </nc-button-group>
    <nc-button-group expanded>
      <button nc-button>按钮1</button>
      <button nc-button>按钮2</button>
      <button nc-button>按钮3</button>
    </nc-button-group>
  `
})
export class ExampleButtonGroupComponent { }
