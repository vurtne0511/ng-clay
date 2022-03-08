import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NcFileModule } from '@ng-clay/components/core';
import { NcModalModule } from '@ng-clay/components/modal';
import { NcProgressModule } from '@ng-clay/components/progress';

import { NcPictureComponent } from './picture.component';

@NgModule({
  imports: [
    CommonModule,
    NcFileModule,
    NcModalModule,
    NcProgressModule
  ],
  exports: [
    NcFileModule,
    NcPictureComponent
  ],
  declarations: [NcPictureComponent]
})
export class NcPictureModule { }
