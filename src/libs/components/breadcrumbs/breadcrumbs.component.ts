import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[nc-breadcrumbs]',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'breadcrumbs'
  }
})
export class NcBreadcrumbsComponent { }
