

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NcButtonModule } from '@ng-clay/components/button';
import { NcModalModule } from '@ng-clay/components/modal';
import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { ExampleModalBasicComponent, ExampleModalComponentDialogComponent } from './examples/basic';
import { ExampleModalCenterVerticallyComponent } from './examples/center-vertically';
import { ExampleModalClassComponent } from './examples/class';
import { ExampleModalClosableComponent } from './examples/closable';
import { ExampleModalConfigComponent } from './examples/config';
import { ExampleModalComponentContentComponent } from './examples/content';
import { ExampleModalComponentDataComponent, ExampleModalDataComponent } from './examples/data';
import { ExampleModalEventComponent } from './examples/event';
import { ExampleModalHasBackdropComponent } from './examples/hasBackdrop';
import { ExampleModalHeightComponent } from './examples/height';
import { ExampleModalTopComponent } from './examples/top';
import { ExampleModalTransparentComponent } from './examples/transparent';
import { ExampleModalWidthComponent } from './examples/width';
import { ModalDocumentComponent } from './modal.component';

@NgModule({
  imports: [
    CommonModule,
    NcButtonModule,
    NcModalModule,
    NcExampleModule,
    NcMarkdownModule,
    RouterModule.forChild([
      { path: '', component: ModalDocumentComponent }
    ])],
  declarations: [
    ModalDocumentComponent,
    ExampleModalBasicComponent,
    ExampleModalComponentDialogComponent,
    ExampleModalEventComponent,
    ExampleModalConfigComponent,
    ExampleModalComponentContentComponent,
    ExampleModalComponentDataComponent,
    ExampleModalDataComponent,
    ExampleModalWidthComponent,
    ExampleModalHeightComponent,
    ExampleModalTopComponent,
    ExampleModalClosableComponent,
    ExampleModalHasBackdropComponent,
    ExampleModalCenterVerticallyComponent,
    ExampleModalTransparentComponent,
    ExampleModalClassComponent
  ]
})
export class ModalDocumentModule { }
