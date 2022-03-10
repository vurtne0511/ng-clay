import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NcMenuModule } from '@ng-clay/components/menu';
import { NcTreeModule } from '@ng-clay/components/tree';
import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { ExampleTreeAsyncComponent } from './examples/async.component';
import { ExampleTreeCheckboxComponent } from './examples/checkbox.component';
import { ExampleTreeFlatComponent } from './examples/flat.component';
import { ExampleTreeNestedComponent } from './examples/nested.component';
import { ExampleTreeTableComponent } from './examples/table.component';
import { TreeDocumentComponent } from './tree.component';

@NgModule({
  imports: [
    CommonModule,
    NcExampleModule,
    NcMenuModule,
    NcTreeModule,
    NcMarkdownModule,
    RouterModule.forChild([
      { path: '', component: TreeDocumentComponent }
    ])
  ],
  exports: [TreeDocumentComponent],
  declarations: [
    TreeDocumentComponent,
    ExampleTreeAsyncComponent,
    ExampleTreeCheckboxComponent,
    ExampleTreeFlatComponent,
    ExampleTreeNestedComponent,
    ExampleTreeTableComponent
  ]
})
export class TreeDocumentModule { }
