import { Platform } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NcInputAddonComponent } from './input-addon.component';
import { NcInputGroupComponent } from './input-group.component';
import { NcInputDirective } from './input.directive';

@NgModule({
  imports: [CommonModule],
  exports: [NcInputDirective, NcInputGroupComponent, NcInputAddonComponent],
  declarations: [NcInputDirective, NcInputGroupComponent, NcInputAddonComponent],
  providers: [Platform]
})
export class NcInputModule { }
