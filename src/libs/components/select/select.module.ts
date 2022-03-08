import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NcOptionModule, NcPseudoInputModule } from '@ng-clay/components/core';
import { NcOverlayModule } from '@ng-clay/components/overlay';
import { NcSelectComponent } from './select.component';

@NgModule({
  imports: [
    CommonModule,
    NcOverlayModule,
    NcOptionModule,
    NcPseudoInputModule
  ],
  exports: [NcSelectComponent, NcOptionModule],
  declarations: [NcSelectComponent]
})
export class NcSelectModule { }
