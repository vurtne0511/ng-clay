
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NcPopConfirmModule } from '@ng-clay/components/popconfirm';
import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { ExamplePopConfirmBasciComponent } from './examples/basic';
import { ExamplePopconfirmChangeComponent } from './examples/change';
import { ExamplePopConfirmPositionComponent } from './examples/position';
import { ExamplePopConfirmTextComponent } from './examples/text';
import { PopconfirmDocumentComponent } from './popconfirm.component';

@NgModule({
  imports: [
    CommonModule,
    NcExampleModule,
    NcPopConfirmModule,
    NcMarkdownModule,
    RouterModule.forChild([
      { path: '', component: PopconfirmDocumentComponent }
    ])],
  declarations: [
    PopconfirmDocumentComponent,
    ExamplePopConfirmBasciComponent,
    ExamplePopConfirmTextComponent,
    ExamplePopConfirmPositionComponent,
    ExamplePopconfirmChangeComponent
  ],
})
export class PopconfirmDocumentModule { }
