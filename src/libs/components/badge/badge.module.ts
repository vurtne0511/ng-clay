import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NcBadgeComponent } from './badge.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NcBadgeComponent],
  exports: [NcBadgeComponent]
})
export class NcBadgeModule { }
