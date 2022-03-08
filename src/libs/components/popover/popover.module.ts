import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NcOverlayModule } from '@ng-clay/components/overlay';
import { NcDropdownModule } from '@ng-clay/components/dropdown';

import { NcPopoverPaneComponent } from './popover-pane.component';
import { NcPopoverComponent } from './popover.component';

@NgModule({
  imports: [CommonModule, ObserversModule, NcOverlayModule,  NcDropdownModule],
  exports: [NcPopoverComponent, NcPopoverPaneComponent],
  declarations: [NcPopoverComponent, NcPopoverPaneComponent]
})
export class NcPopoverModule { }
