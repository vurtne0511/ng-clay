import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NcOptionComponent } from './option.component';

export * from './option.component';

@NgModule({
  imports: [CommonModule],
  exports: [NcOptionComponent],
  declarations: [NcOptionComponent]
})
export class NcOptionModule { }
