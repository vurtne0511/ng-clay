import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NcAttachmentModule } from '@ng-clay/components/attachment';
import { NcFormsModule } from '@ng-clay/components/forms';
import { NcRadioModule } from '@ng-clay/components/radio';
import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { AttachmentDocumentComponent } from './attachment.component';
import { ExampleAttachmentAcceptComponent } from './examples/accept';
import { ExampleAttachmentBasciComponent } from './examples/basic';
import { ExampleAttachmentEventComponent } from './examples/event';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NcExampleModule,
    NcMarkdownModule,
    NcRadioModule,
    NcAttachmentModule,
    NcFormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: AttachmentDocumentComponent }
    ])
  ],
  declarations: [
    AttachmentDocumentComponent,
    ExampleAttachmentBasciComponent,
    ExampleAttachmentEventComponent,
    ExampleAttachmentAcceptComponent
  ]
})
export class AttachmentDocumentModule { }
