
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NcPaginationModule } from '@ng-clay/components/pagination';
import { NcScrimModule } from '@ng-clay/components/scrim';
import { NcTableModule } from '@ng-clay/components/table';
import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { ExampleScrimBasciComponent } from './examples/basic';
import { ScrimDocumentComponent } from './scrim.component';

@NgModule({
  imports: [
    CommonModule,
    NcExampleModule,
    NcScrimModule,
    NcTableModule,
    NcPaginationModule,
    NcMarkdownModule,
    RouterModule.forChild([
      { path: '', component: ScrimDocumentComponent }
    ])],
  exports: [ScrimDocumentComponent],
  declarations: [ScrimDocumentComponent, ExampleScrimBasciComponent],
})
export class ScrimDocumentModule { }
