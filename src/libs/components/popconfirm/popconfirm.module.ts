import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NcButtonModule } from '@ng-clay/components/button';
import { NcOverlayModule } from '@ng-clay/components/overlay';

import { NcPopConfirmComponent } from './popconfirm.component';

@NgModule({
  imports: [CommonModule, NcOverlayModule, NcButtonModule],
  exports: [NcPopConfirmComponent],
  declarations: [NcPopConfirmComponent]
})
export class NcPopConfirmModule { }
