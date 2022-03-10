
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NcLabelModule } from '@ng-clay/components/label';
import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { ExampleLabelBasicComponent } from './examples/basic';
import { ExampleLabelColorsComponent } from './examples/colors';
import { ExampleLabelIconComponent } from './examples/icon';
import { LabelDocumentComponent } from './label.component';

@NgModule({
  imports: [
    CommonModule,
    NcExampleModule,
    NcLabelModule,
    NcMarkdownModule,
    RouterModule.forChild([
      { path: '', component: LabelDocumentComponent }
    ])],
  declarations: [LabelDocumentComponent, ExampleLabelBasicComponent, ExampleLabelIconComponent, ExampleLabelColorsComponent],
})
export class LabelDocumentModule { }
