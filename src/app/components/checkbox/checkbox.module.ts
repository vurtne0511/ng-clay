import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NcCheckboxModule } from '@ng-clay/components/checkbox';
import { NcFormsModule } from '@ng-clay/components/forms';
import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { CheckboxDocumentComponent } from './checkbox.component';
import { ExampleCheckboxAllComponent } from './examples/all';
import { ExampleCheckboxBasicComponent } from './examples/basic';
import { ExampleCheckboxChangeComponent } from './examples/change';
import { ExampleCheckboxDisabledComponent } from './examples/disabled';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NcCheckboxModule,
    NcExampleModule,
    NcFormsModule,
    NcMarkdownModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: CheckboxDocumentComponent }
    ])
  ],
  declarations: [
    CheckboxDocumentComponent,
    ExampleCheckboxBasicComponent,
    ExampleCheckboxDisabledComponent,
    ExampleCheckboxAllComponent,
    ExampleCheckboxChangeComponent
  ]
})
export class CheckboxDocumentModule { }
