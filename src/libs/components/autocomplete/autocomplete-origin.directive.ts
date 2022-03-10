import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ncAutocompleteOrigin]',
  exportAs: 'ncAutocompleteOrigin',
})
export class NcAutocompleteOriginDirective {
  constructor(public elementRef: ElementRef<HTMLElement>) { }
}
