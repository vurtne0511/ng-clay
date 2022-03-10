import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NcAvatarComponent } from './avatar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NcAvatarComponent],
  exports: [NcAvatarComponent]
})
export class NcAvatarModule { }
