import { CdkTreeModule } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  NcNestedTreeNodeDirective,
  NcTreeNodeDefDirective,
  NcTreeNodeDirective
} from './node.directive';
import { NcTreeNodeOutletDirective } from './outlet.directive';
import { NcTreeNodePaddingDirective } from './padding.directive';
import { NcTreeNodeToggleDirective } from './toggle.directive';
import { NcTreeComponent } from './tree.component';

const NC_TREE_DIRECTIVES = [
  NcNestedTreeNodeDirective,
  NcTreeNodeDefDirective,
  NcTreeNodePaddingDirective,
  NcTreeNodeToggleDirective,
  NcTreeComponent,
  NcTreeNodeDirective,
  NcTreeNodeOutletDirective
];

@NgModule({
  imports: [CdkTreeModule, CommonModule],
  exports: NC_TREE_DIRECTIVES,
  declarations: NC_TREE_DIRECTIVES
})
export class NcTreeModule { }
