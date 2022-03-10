import { Component } from '@angular/core';

@Component({
  selector: 'example-label-basic',
  styles: [
    `
      nc-label {
        margin-right: 5px;
      }
    `
  ],
  template: `
    <nc-label>1</nc-label>
    <span nc-label>2</span>
  `
})
export class ExampleLabelBasicComponent { }
