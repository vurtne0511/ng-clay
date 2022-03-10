
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NcBreadcrumbsModule } from '@ng-clay/components/breadcrumbs';
import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { BreadcrumbsDocumentComponent } from './breadcrumbs.component';
import { ExampleBreadcrumbsBasicComponent } from './examples/basic';

@NgModule({
  imports: [
    CommonModule,
    NcBreadcrumbsModule,
    NcExampleModule,
    NcMarkdownModule,
    RouterModule.forChild([
      { path: '', component: BreadcrumbsDocumentComponent }
    ])],
  declarations: [
    BreadcrumbsDocumentComponent,
    ExampleBreadcrumbsBasicComponent
  ],
})
export class BreadcrumbsDocumentModule { }
