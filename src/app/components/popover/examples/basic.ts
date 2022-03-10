import { Component } from '@angular/core';

@Component({
  selector: 'example-popover-basic',
  template: `
    <a class="button" nc-popover="Title">
      Click me
      <nc-popover-pane>Content</nc-popover-pane>
    </a>
  `
})
export class ExamplePopoverBasciComponent {

}
