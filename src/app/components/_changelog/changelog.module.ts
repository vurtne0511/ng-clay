import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { HeaderModule } from '../../shared/header';
import { ChangelogComponent } from './changelog.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    NcMarkdownModule,
    RouterModule.forChild([
      { path: '', component: ChangelogComponent }
    ])
  ],
  declarations: [ChangelogComponent]
})
export class ChangelogModule { }
