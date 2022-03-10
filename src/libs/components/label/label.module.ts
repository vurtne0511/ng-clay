import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NcLabelComponent } from './label.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NcLabelComponent],
  exports: [NcLabelComponent]
})
export class NcLabelModule { }
