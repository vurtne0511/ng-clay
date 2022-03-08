
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NcCheckboxGroupComponent } from './checkbox-group.component';
import { NcCheckboxComponent } from './checkbox.component';

@NgModule({
  imports: [CommonModule],
  exports: [NcCheckboxComponent, NcCheckboxGroupComponent],
  declarations: [NcCheckboxComponent, NcCheckboxGroupComponent],
})
export class NcCheckboxModule { }
