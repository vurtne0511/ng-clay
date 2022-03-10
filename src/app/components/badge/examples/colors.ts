import { Component } from '@angular/core';

@Component({
  selector: 'example-badge-colors',
  template: `
    <nc-badge color="primary">9</nc-badge>
    <nc-badge color="secondary">2</nc-badge>
    <nc-badge color="success">3</nc-badge>
    <nc-badge color="alert">A</nc-badge>
    <nc-badge color="warning">B</nc-badge>
  `
})
export class ExampleBadgeColorsComponent {
  constructor() { }
}
