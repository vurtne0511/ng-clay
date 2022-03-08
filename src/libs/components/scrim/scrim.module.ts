import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NcScrimComponent } from './scrim.component';
import { NcScrimDirective } from './scrim.directive';

@NgModule({
  imports: [CommonModule],
  exports: [NcScrimComponent, NcScrimDirective],
  declarations: [NcScrimComponent, NcScrimDirective],
  entryComponents: [NcScrimComponent]
})
export class NcScrimModule { }
