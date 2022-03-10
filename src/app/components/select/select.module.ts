import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NcFormsModule } from '@ng-clay/components/forms';
import { NcSelectModule } from '@ng-clay/components/select';
import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { ExampleSelectCompareWithComponent } from './examples/compareWith';
import { ExampleSelectCoordinatComponent } from './examples/coordinat';
import { ExampleSelectDisabledComponent } from './examples/disabled';
import { ExampleSelectEventComponent } from './examples/event';
import { ExampleSelectFilterComponent } from './examples/filter';
import { ExampleSelectMultipleComponent } from './examples/multiple';
import { ExampleSelectPlaceholderComponent } from './examples/placeholder';
import { ExampleSelectRequiredComponent } from './examples/required';
import { ExampleSelectSingleComponent } from './examples/single';
import { SelectDocumentComponent } from './select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NcExampleModule,
    NcSelectModule,
    NcFormsModule,
    NcMarkdownModule,
    RouterModule.forChild([
      { path: '', component: SelectDocumentComponent }
    ])],
  exports: [SelectDocumentComponent],
  declarations: [
    SelectDocumentComponent,
    ExampleSelectSingleComponent,
    ExampleSelectMultipleComponent,
    ExampleSelectDisabledComponent,
    ExampleSelectRequiredComponent,
    ExampleSelectCompareWithComponent,
    ExampleSelectPlaceholderComponent,
    ExampleSelectEventComponent,
    ExampleSelectFilterComponent,
    ExampleSelectCoordinatComponent
  ],
})
export class SelectDocumentModule { }
