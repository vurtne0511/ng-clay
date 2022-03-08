
import { CdkTreeNodePadding } from '@angular/cdk/tree';
import { Directive } from '@angular/core';

@Directive({
  selector: '[ncTreeNodePadding]',
  providers: [{ provide: CdkTreeNodePadding, useExisting: NcTreeNodePaddingDirective }],
  inputs: ['level:NcTreeNodePadding', 'indent:NcTreeNodePaddingIndent']
})
export class NcTreeNodePaddingDirective<T> extends CdkTreeNodePadding<T> { }
