import { Component } from '@angular/core';

@Component({
  selector: 'example-menu-nested',
  template: `
    <ul nc-menu orientation="vertical">
      <li><a href="#">1</a></li>
      <li><a href="#">2</a></li>
      <li>
        <a href="#">3</a>
        <ul nc-menu orientation="vertical">
          <li><a href="#">3-1</a></li>
          <li><a href="#">3-2</a></li>
          <li><a href="#">3-3</a></li>
          <li><a href="#">3-4</a>
          <ul nc-menu orientation="vertical">
            <li><a href="#">3-4-1</a></li>
            <li class="is-active"><a href="#">3-4-2</a></li>
            <li><a href="#">3-4-3</a></li>
            <li><a href="#">3-4-4</a></li>
          </ul>
          </li>
        </ul>
      </li>
      <li><a href="#">4</a></li>
    </ul>
  `
})
export class ExampleMenuNestedComponent { }
