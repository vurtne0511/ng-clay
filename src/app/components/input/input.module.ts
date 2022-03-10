import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NcButtonModule } from '@ng-clay/components/button';
import { NcDropdownModule } from '@ng-clay/components/dropdown';
import { NcInputModule } from '@ng-clay/components/input';
import { NcMenuModule } from '@ng-clay/components/menu';
import { NcSelectModule } from '@ng-clay/components/select';
import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { ExampleInputBasicComponent } from './examples/basic';
import { ExampleInputGroupComponent } from './examples/group';
import { InputDocumentComponent } from './input.component';

@NgModule({
  imports: [
    CommonModule,
    NcInputModule,
    NcExampleModule,
    NcButtonModule,
    NcDropdownModule,
    NcMenuModule,
    NcSelectModule,
    NcMarkdownModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: InputDocumentComponent },
    ])
  ],
  declarations: [InputDocumentComponent, ExampleInputBasicComponent, ExampleInputGroupComponent]
})
export class InputDocumentModule { }
