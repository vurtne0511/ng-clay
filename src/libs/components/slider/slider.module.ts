import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NcOverlayModule } from '@ng-clay/components/overlay';

import { NcSliderInputDirective } from './slider-input.directive';
import { NcSliderRangeComponent } from './slider-range.component';
import { NcSliderComponent } from './slider.component';

@NgModule({
  imports: [
    CommonModule,
    A11yModule,
    NcOverlayModule,
  ],
  exports: [
    NcSliderComponent,
    NcSliderRangeComponent,
    NcSliderInputDirective
  ],
  declarations: [
    NcSliderComponent,
    NcSliderRangeComponent,
    NcSliderInputDirective
  ]
})
export class NcSliderModule { }
