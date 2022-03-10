import { Component } from '@angular/core';

@Component({
  selector: 'example-button-basic',
  template: `
    <button nc-button>默认</button>
    <button nc-button="hollow">空心</button>
    <button nc-button="clear">清空</button>
    <button nc-button disabled>不可用</button>
  `
})
export class ExampleButtonBasicComponent { }
