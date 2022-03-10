
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NcBadgeModule } from '@ng-clay/components/badge';
import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { BadgeDocumentComponent } from './badge.component';
import { ExampleBadgeBasicComponent } from './examples/basic';
import { ExampleBadgeColorsComponent } from './examples/colors';
import { ExampleBadgeIconComponent } from './examples/icon';

@NgModule({
  imports: [
    CommonModule,
    NcMarkdownModule,
    NcExampleModule,
    NcBadgeModule,
    RouterModule.forChild([
      { path: '', component: BadgeDocumentComponent }
    ])
  ],
  declarations: [
    BadgeDocumentComponent,
    ExampleBadgeBasicComponent,
    ExampleBadgeColorsComponent,
    ExampleBadgeIconComponent
  ]
})
export class BadgeDocumentModule { }
