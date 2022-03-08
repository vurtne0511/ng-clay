import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NcOverlayModule } from '@ng-clay/components/overlay';

import { NcDropdownPaneComponent } from './dropdown-pane.component';
import { NcDropdownComponent } from './dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    ObserversModule,
    NcOverlayModule
  ],
  exports: [
    NcDropdownComponent,
    NcDropdownPaneComponent
  ],
  declarations: [
    NcDropdownComponent,
    NcDropdownPaneComponent
  ]
})
export class NcDropdownModule { }
