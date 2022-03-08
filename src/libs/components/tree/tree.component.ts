import { CdkTree } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { NcTreeNodeOutletDirective } from './outlet.directive';

@Component({
  selector: 'nc-tree, [nc-tree]',
  template: `<ng-container NcTreeNodeOutlet></ng-container>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: CdkTree, useExisting: NcTreeComponent }
  ],
  host: {
    'class': 'nc-tree'
  }
})
export class NcTreeComponent<T> extends CdkTree<T> {
  @ViewChild(NcTreeNodeOutletDirective, {static: true}) override _nodeOutlet!: NcTreeNodeOutletDirective;
}
