import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { ContextMenuDocumentComponent } from './contextmenu.component';

@NgModule({
  imports: [
    CommonModule,
    NcMarkdownModule,
    RouterModule.forChild([
      { path: '', component: ContextMenuDocumentComponent }
    ])
  ],
  declarations: [ContextMenuDocumentComponent]
})
export class ContextMenuDocumentModule { }
