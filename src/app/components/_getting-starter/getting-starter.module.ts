import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { GettingStarterComponent } from './getting-starter.component';

@NgModule({
  imports: [
    CommonModule,
    NcMarkdownModule,
    RouterModule.forChild([
      { path: '', component: GettingStarterComponent }
    ])
  ],
  declarations: [GettingStarterComponent]
})
export class GettingStarterModule { }
