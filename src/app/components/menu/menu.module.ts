
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NcMenuModule } from '@ng-clay/components/menu';
import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { ExampleMenuAlignComponent } from './examples/align';
import { ExampleMenuBasicComponent } from './examples/basic';
import { ExampleMenuNestedComponent } from './examples/nested';
import { MenuDocumentComponent } from './menu.component';

@NgModule({
  imports: [
    CommonModule,
    NcExampleModule,
    NcMenuModule,
    NcMarkdownModule,
    RouterModule.forChild([
      { path: '', component: MenuDocumentComponent }
    ])],
  declarations: [MenuDocumentComponent, ExampleMenuBasicComponent, ExampleMenuAlignComponent, ExampleMenuNestedComponent],
})
export class MenuDocumentModule { }
