import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NcBreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NcBreadcrumbsComponent],
  exports: [NcBreadcrumbsComponent]
})
export class NcBreadcrumbsModule { }
