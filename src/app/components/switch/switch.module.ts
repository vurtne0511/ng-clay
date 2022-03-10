import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NcCheckboxModule } from '@ng-clay/components/checkbox';
import { NcSwitchModule } from '@ng-clay/components/switch';
import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { ExampleSwitchBasciComponent } from './examples/basic';
import { ExampleSwitchChangeComponent } from './examples/change';
import { ExampleSwitchCheckedComponent } from './examples/checked';
import { ExampleSwitchCircleComponent } from './examples/circle';
import { ExampleSwitchDisabledComponent } from './examples/disabled';
import { ExampleSwitchSizeComponent } from './examples/size';
import { SwitchDocumentComponent } from './switch.component';

@NgModule({
  imports: [
    CommonModule,
    NcExampleModule,
    NcSwitchModule,
    NcCheckboxModule,
    NcMarkdownModule,
    RouterModule.forChild([
      { path: '', component: SwitchDocumentComponent }
    ])],
  exports: [SwitchDocumentComponent],
  declarations: [
    SwitchDocumentComponent,
    ExampleSwitchBasciComponent,
    ExampleSwitchCircleComponent,
    ExampleSwitchSizeComponent,
    ExampleSwitchDisabledComponent,
    ExampleSwitchCheckedComponent,
    ExampleSwitchChangeComponent
  ],
})
export class SwitchDocumentModule { }
