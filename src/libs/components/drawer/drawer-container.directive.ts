import { Directive, ElementRef } from '@angular/core';

import { NT_DRAWER_CONTAINER, NcDrawerContainer } from './drawer.component';

@Directive({
  selector: '[nc-drawer-container]',
  providers: [
    { provide: NT_DRAWER_CONTAINER, useExisting: NcDrawerContainerDirective }
  ],
  host: {
    'class': 'nt-drawer-container'
  }
})
export class NcDrawerContainerDirective implements NcDrawerContainer {

  readonly element: HTMLElement;

  constructor(_element: ElementRef) {
    this.element = _element.nativeElement;
  }
}
