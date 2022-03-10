import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NcButtonModule } from '@ng-clay/components/button';
import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { ExampleNotifierBasicComponent } from './examples/basic';
import { ExampleNotifierGroupComponent } from './examples/group';
import { NotifierDocumentComponent } from './notifier.component';

@NgModule({
  imports: [
    NcButtonModule,
    NcExampleModule,
    NcMarkdownModule,
    RouterModule.forChild([
      { path: '', component: NotifierDocumentComponent }
    ])
  ],
  declarations: [
    NotifierDocumentComponent,
    ExampleNotifierBasicComponent,
    ExampleNotifierGroupComponent
  ]
})
export class NotifierDocumentModule { }
