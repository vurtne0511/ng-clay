
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NcMarkdownComponent } from './markdown.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NcMarkdownComponent],
  exports: [NcMarkdownComponent]
})
export class NcMarkdownModule { }
