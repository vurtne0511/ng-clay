import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NcOverlayModule } from '@ng-clay/components/overlay';

import { NcTooltipComponent } from './tooltip.component';

@NgModule({
  imports: [CommonModule, NcOverlayModule],
  exports: [NcTooltipComponent],
  declarations: [NcTooltipComponent]
})
export class NcTooltipModule { }
