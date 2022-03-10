import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NcFormsModule } from '@ng-clay/components/forms';
import { NcRadioModule } from '@ng-clay/components/radio';
import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { ExampleRadioBasicComponent } from './examples/basic';
import { ExampleRadioChangeComponent } from './examples/change';
import { ExampleRadioClickComponent } from './examples/click';
import { ExampleRadioDisabledComponent } from './examples/disabled';
import { ExampleRadioGroupComponent } from './examples/group';
import { RadioDocumentComponent } from './radio.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NcFormsModule,
    NcExampleModule,
    NcRadioModule,
    NcMarkdownModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: RadioDocumentComponent }
    ])
  ],
  declarations: [
    RadioDocumentComponent,
    ExampleRadioBasicComponent,
    ExampleRadioGroupComponent,
    ExampleRadioDisabledComponent,
    ExampleRadioClickComponent,
    ExampleRadioChangeComponent
  ]
})
export class RadioDocumentModule { }
