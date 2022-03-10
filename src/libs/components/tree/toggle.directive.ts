import { CdkTreeNodeToggle } from '@angular/cdk/tree';
import { Directive } from '@angular/core';

@Directive({
  selector: '[ncTreeNodeToggle]',
  providers: [
    { provide: CdkTreeNodeToggle, useExisting: NcTreeNodeToggleDirective }
  ],
  inputs: ['recursive: NcTreeNodeToggleRecursive']
})
export class NcTreeNodeToggleDirective<T> extends CdkTreeNodeToggle<T> { }
