import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NcModalBodyComponent } from './modal-body.component';
import { NcModalFooterComponent } from './modal-footer.component';
import { NcModalHeaderComponent } from './modal-header.component';
import { NcModalComponent } from './modal.component';
import { NcModal } from './modal.service';

const EXPORTS_DECLARATIONS = [
  NcModalComponent,
  NcModalHeaderComponent,
  NcModalBodyComponent,
  NcModalFooterComponent
];

@NgModule({
  imports: [
    CommonModule,
    PortalModule,
    OverlayModule
  ],
  declarations: EXPORTS_DECLARATIONS,
  exports: EXPORTS_DECLARATIONS,
  entryComponents: [NcModalComponent],
  providers: [NcModal]
})
export class NcModalModule { }
