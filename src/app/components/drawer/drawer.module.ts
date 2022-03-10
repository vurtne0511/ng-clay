import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NcButtonModule } from '@ng-clay/components/button';
import { NcDrawerModule } from '@ng-clay/components/drawer';
import { NcRadioModule } from '@ng-clay/components/radio';
import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { DrawerDocumentComponent } from './drawer.component';
import { ExampleDrawerBackdropComponent } from './examples/backdrop';
import { ExampleDrawerBasicComponent } from './examples/basic';
import { ExampleDrawerEventComponent } from './examples/event';
import { ExampleDrawerNestedComponent } from './examples/nested';
import { ExampleDrawerPlacementComponent } from './examples/placement';

@NgModule({
  imports: [
    CommonModule,
    NcButtonModule,
    NcExampleModule,
    NcDrawerModule,
    NcMarkdownModule,
    NcRadioModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: DrawerDocumentComponent }
    ])
  ],
  declarations: [
    DrawerDocumentComponent,
    ExampleDrawerBasicComponent,
    ExampleDrawerEventComponent,
    ExampleDrawerBackdropComponent,
    ExampleDrawerNestedComponent,
    ExampleDrawerPlacementComponent
  ]
})
export class DrawerDocumentModule { }
