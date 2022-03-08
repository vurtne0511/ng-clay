import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[NcAutocompleteOrigin]',
  exportAs: 'ncAutocompleteOrigin',
})
export class NcAutocompleteOriginDirective {
  constructor(public elementRef: ElementRef<HTMLElement>) { }
}
