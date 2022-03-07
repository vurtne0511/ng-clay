

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NcPseudoCaretComponent } from './pseudo-caret.component';
import { NcPseudoInputComponent } from './pseudo-input.component';

export * from './pseudo-caret.component';
export * from './pseudo-input.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NcPseudoInputComponent,
    NcPseudoCaretComponent
  ],
  exports: [
    NcPseudoInputComponent,
    NcPseudoCaretComponent
  ]
})
export class NcPseudoInputModule { }
