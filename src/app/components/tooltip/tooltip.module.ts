
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NcTooltipModule } from '@ng-clay/components/tooltip';
import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { ExampleTooltipBasciComponent } from './examples/basic';
import { ExampleTooltipChangeComponent } from './examples/change';
import { ExampleTooltipPositionComponent } from './examples/position';
import { TooltipDocumentComponent } from './tooltip.component';

@NgModule({
  imports: [
    CommonModule,
    NcExampleModule,
    NcTooltipModule,
    NcMarkdownModule,
    RouterModule.forChild([
      { path: '', component: TooltipDocumentComponent }
    ])],
  exports: [TooltipDocumentComponent],
  declarations: [
    TooltipDocumentComponent,
    ExampleTooltipBasciComponent,
    ExampleTooltipChangeComponent,
    ExampleTooltipPositionComponent
  ],
})
export class TooltipDocumentModule { }
