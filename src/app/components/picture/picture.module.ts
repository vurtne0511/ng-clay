import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NcFormsModule } from '@ng-clay/components/forms';
import { NcPictureModule } from '@ng-clay/components/picture';
import { NcRadioModule } from '@ng-clay/components/radio';
import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { ExamplePictureAcceptComponent } from './examples/accept';
import { ExamplePictureBasciComponent } from './examples/basic';
import { ExamplePictureEventComponent } from './examples/event';
import { PictureDocumentComponent } from './picture.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NcExampleModule,
    NcMarkdownModule,
    NcRadioModule,
    NcPictureModule,
    NcFormsModule,
    RouterModule.forChild([
      { path: '', component: PictureDocumentComponent }
    ])
  ],
  declarations: [
    PictureDocumentComponent,
    ExamplePictureBasciComponent,
    ExamplePictureEventComponent,
    ExamplePictureAcceptComponent
  ]
})
export class PictureDocumentModule { }
