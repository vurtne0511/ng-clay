import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-getting-starter',
  template: '<nc-markdown [data]="markdown"></nc-markdown>',
  encapsulation: ViewEncapsulation.None
})
export class GettingStarterComponent {
  markdown = require('!!raw-loader!./getting-starter.md').default;
}
