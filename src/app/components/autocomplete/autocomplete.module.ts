import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NcAutocompleteModule } from '@ng-clay/components/autocomplete';
import { NcInputModule } from '@ng-clay/components/input';
import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { AutocompleteDocumentComponent } from './autocomplete.component';
import { ExampleAutocompleteBasicComponent } from './examples/basic';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NcMarkdownModule,
    NcExampleModule,
    NcAutocompleteModule,
    NcInputModule,
    RouterModule.forChild([
      { path: '', component: AutocompleteDocumentComponent }
    ])
  ],
  declarations: [
    AutocompleteDocumentComponent,
    ExampleAutocompleteBasicComponent
  ]
})
export class AutocompleteDocumentModule { }
