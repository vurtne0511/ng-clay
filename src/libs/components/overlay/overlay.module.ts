import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NcOverlayComponent } from './overlay.component';

@NgModule({
  imports: [CommonModule, OverlayModule],
  exports: [NcOverlayComponent],
  declarations: [NcOverlayComponent],
})
export class NcOverlayModule { }
