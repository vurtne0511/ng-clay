import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NcContextMenuComponent } from './contextmenu.component';
import { NcContextMenuDirective } from './contextmenu.directive';

@NgModule({
  imports: [
    CommonModule,
    PortalModule,
    OverlayModule
  ],
  exports: [NcContextMenuDirective],
  declarations: [
    NcContextMenuComponent,
    NcContextMenuDirective
  ]
})
export class NcContextMenuModule { }
