import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NcMenuComponent } from './menu.component';

@NgModule({
  imports: [CommonModule],
  exports: [NcMenuComponent],
  declarations: [NcMenuComponent]
})
export class NcMenuModule { }
