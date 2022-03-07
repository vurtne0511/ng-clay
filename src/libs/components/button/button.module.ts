import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NcButtonGroupComponent } from './button-group.component';
import { NcButtonComponent } from './button.component';

@NgModule({
  imports: [CommonModule],
  exports: [NcButtonComponent, NcButtonGroupComponent],
  declarations: [NcButtonComponent, NcButtonGroupComponent],
})
export class NcButtonModule { }
