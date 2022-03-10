import { Component } from '@angular/core';

@Component({
  selector: 'example-menu-align',
  template: `
    <ul nc-menu align="center">
      <li><a href="#">One</a></li>
      <li><a href="#">Two</a></li>
      <li><a href="#">Three</a></li>
      <li><a href="#">Four</a></li>
    </ul>
    <ul nc-menu align="right">
      <li><a href="#">One</a></li>
      <li><a href="#">Two</a></li>
      <li><a href="#">Three</a></li>
      <li><a href="#">Four</a></li>
    </ul>
  `
})
export class ExampleMenuAlignComponent { }
