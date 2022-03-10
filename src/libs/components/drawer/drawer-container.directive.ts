import { Directive, ElementRef } from '@angular/core';

import { NC_DRAWER_CONTAINER, NcDrawerContainer } from './drawer.component';

@Directive({
  selector: '[nc-drawer-container]',
  providers: [
    { provide: NC_DRAWER_CONTAINER, useExisting: NcDrawerContainerDirective }
  ],
  host: {
    'class': 'nc-drawer-container'
  }
})
export class NcDrawerContainerDirective implements NcDrawerContainer {

  readonly element: HTMLElement;

  constructor(_element: ElementRef) {
    this.element = _element.nativeElement;
  }
}
