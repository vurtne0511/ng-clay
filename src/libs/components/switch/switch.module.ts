import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NcSwitchComponent } from './switch.component';

@NgModule({
  imports: [CommonModule],
  exports: [NcSwitchComponent],
  declarations: [NcSwitchComponent]
})
export class NcSwitchModule { }
