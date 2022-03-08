
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NcRadioGroupComponent } from './radio-group.component';
import { NcRadioComponent } from './radio.component';

@NgModule({
  imports: [CommonModule],
  exports: [NcRadioComponent, NcRadioGroupComponent],
  declarations: [NcRadioComponent, NcRadioGroupComponent],
})
export class NcRadioModule { }
