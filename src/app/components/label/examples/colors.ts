import { Component } from '@angular/core';

@Component({
  selector: 'example-label-colors',
  styles: [
    `
      nc-label {
        margin-right: 5px;
      }
    `
  ],
  template: `
    <nc-label color="primary">primary</nc-label>
    <nc-label color="secondary">secondary</nc-label>
    <nc-label color="success">success</nc-label>
    <nc-label color="warning">warning</nc-label>
    <nc-label color="alert">alert</nc-label>
  `
})
export class ExampleLabelColorsComponent { }
