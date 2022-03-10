import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NcProgressModule } from '@ng-clay/components/progress';
import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { ExampleProgressBasciComponent } from './examples/basic';
import { ExampleProgressCircleComponent } from './examples/circle';
import { ProgressDocumentComponent } from './progress.component';

@NgModule({
  imports: [
    CommonModule,
    NcExampleModule,
    NcMarkdownModule,
    NcProgressModule,
    RouterModule.forChild([
      { path: '', component: ProgressDocumentComponent }
    ])],
  exports: [ProgressDocumentComponent],
  declarations: [
    ProgressDocumentComponent,
    ExampleProgressBasciComponent,
    ExampleProgressCircleComponent
  ],
})
export class ProgressDocumentModule { }
