import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NcDrawerContainerDirective } from './drawer-container.directive';
import { NcDrawerComponent } from './drawer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    NcDrawerComponent,
    NcDrawerContainerDirective
  ],
  declarations: [
    NcDrawerComponent,
    NcDrawerContainerDirective
  ]
})
export class NcDrawerModule { }
