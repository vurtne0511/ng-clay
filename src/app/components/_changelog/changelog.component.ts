import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  template: `
    <nc-markdown [data]="changelog"></nc-markdown>
  `,
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'nt-changelog nt-changelog-timeline wrapper'
  },
  styleUrls: ['changelog.component.scss']
})
export class ChangelogComponent {
  changelog = require('!!raw-loader!CHANGELOG.md').default;
}
