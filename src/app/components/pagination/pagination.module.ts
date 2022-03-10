
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NcPaginationModule } from '@ng-clay/components/pagination';
import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { ExamplePaginationBasicComponent } from './examples/basic';
import { ExamplePaginationMoreComponent } from './examples/more';
import { PaginationDocumentComponent } from './pagination.component';

@NgModule({
  imports: [
    CommonModule,
    NcExampleModule,
    NcPaginationModule,
    NcMarkdownModule,
    RouterModule.forChild([
      { path: '', component: PaginationDocumentComponent }
    ])
  ],
  exports: [PaginationDocumentComponent],
  declarations: [PaginationDocumentComponent, ExamplePaginationBasicComponent, ExamplePaginationMoreComponent],
})
export class PaginationDocumentModule { }
