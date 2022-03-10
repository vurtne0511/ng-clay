
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NcPopoverModule } from '@ng-clay/components/popover';
import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { ExamplePopoverBasciComponent } from './examples/basic';
import { ExamplePopoverChangeComponent } from './examples/change';
import { ExamplePopoverPositionComponent } from './examples/position';
import { PopoverDocumentComponent } from './popover.component';

@NgModule({
  imports: [
    CommonModule,
    NcExampleModule,
    NcPopoverModule,
    NcMarkdownModule,
    RouterModule.forChild([
      { path: '', component: PopoverDocumentComponent }
    ])],
  exports: [PopoverDocumentComponent],
  declarations: [
    PopoverDocumentComponent,
    ExamplePopoverBasciComponent,
    ExamplePopoverChangeComponent,
    ExamplePopoverPositionComponent
  ],
})
export class PopoverDocumentModule { }
