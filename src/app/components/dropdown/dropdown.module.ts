
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NcButtonModule } from '@ng-clay/components/button';
import { NcDropdownModule } from '@ng-clay/components/dropdown';
import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { DropdownDocumentComponent } from './dropdown.component';
import { ExampleDropdownBasicComponent } from './examples/basic';
import { ExampleDropdownChangeComponent } from './examples/change';
import { ExampleDropdownPositionComponent } from './examples/position';
import { ExampleDropdownTriggerComponent } from './examples/trigger';

@NgModule({
  imports: [
    CommonModule,
    NcExampleModule,
    NcMarkdownModule,
    NcButtonModule,
    NcDropdownModule,
    RouterModule.forChild([
      { path: '', component: DropdownDocumentComponent }
    ])],
  declarations: [
    DropdownDocumentComponent,
    ExampleDropdownBasicComponent,
    ExampleDropdownChangeComponent,
    ExampleDropdownPositionComponent,
    ExampleDropdownTriggerComponent
  ]
})
export class DropdownDocumentModule { }
