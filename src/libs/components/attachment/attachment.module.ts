import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NcFileModule } from '@ng-clay/components/core';
import { NcProgressModule } from '@ng-clay/components/progress';

import { NcAttachmentComponent } from './attachment.component';

@NgModule({
  imports: [
    CommonModule,
    NcFileModule,
    NcProgressModule
  ],
  exports: [
    NcFileModule,
    NcAttachmentComponent
  ],
  declarations: [
    NcAttachmentComponent
  ]
})
export class NcAttachmentModule { }
