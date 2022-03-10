import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { ExampleMarkdownBlockComponent } from './examples/basic';
import { MarkdownDocumentComponent } from './markdown.component';

@NgModule({
  imports: [
    CommonModule,
    NcExampleModule,
    NcMarkdownModule,
    RouterModule.forChild([
      { path: '', component: MarkdownDocumentComponent }
    ])
  ],
  declarations: [MarkdownDocumentComponent, ExampleMarkdownBlockComponent]
})
export class MarkdownDocumentModule { }
