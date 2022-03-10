import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NcButtonModule } from '@ng-clay/components/button';
import { NcExampleModule } from '@ng-clay/example';
// import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { ButtonDocumentComponent } from './button.component';
import { ExampleButtonBasicComponent } from './examples/basic';
import { ExampleButtonGroupComponent } from './examples/group';

@NgModule({
  imports: [
    NcButtonModule,
    NcExampleModule,
    NcMarkdownModule,
    RouterModule.forChild([
      { path: '', component: ButtonDocumentComponent }
    ])
  ],
  declarations: [
    ButtonDocumentComponent,
    ExampleButtonBasicComponent,
    ExampleButtonGroupComponent
  ]
})
export class ButtonDocumentModule { }
