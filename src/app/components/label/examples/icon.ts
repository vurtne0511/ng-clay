import { Component } from '@angular/core';

@Component({
  selector: 'example-label-icon',
  styles: [
    `
      nc-label {
        margin-right: 5px;
      }
    `
  ],
  template: `
    <nc-label><i class="fa fa-book"></i>书</nc-label>
    <nc-label><i class="fa fa-camera"></i>相机</nc-label>
  `
})
export class ExampleLabelIconComponent { }
