import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NcDatePickerModule } from '@ng-clay/components/datepicker';
import { NcFormsModule } from '@ng-clay/components/forms';
import { NcInputModule } from '@ng-clay/components/input';
import { NcSelectModule } from '@ng-clay/components/select';
import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { ExampleFormInlineComponent } from './examples/inline';
import { ExampleFormLoginComponent } from './examples/login';
import { FormsDocumentComponent } from './forms.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NcExampleModule,
    NcFormsModule,
    NcInputModule,
    NcSelectModule,
    NcDatePickerModule,
    NcMarkdownModule,
    RouterModule.forChild([
      { path: '', component: FormsDocumentComponent }
    ])
  ],
  declarations: [
    FormsDocumentComponent,
    ExampleFormLoginComponent,
    ExampleFormInlineComponent
  ]
})
export class FormsDocumentModule { }
