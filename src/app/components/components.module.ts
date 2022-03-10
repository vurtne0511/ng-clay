import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NcExampleModule } from '@ng-clay/example';

import { HeaderModule } from '../shared/header';
// import { NcExampleModule } from '@ng-clay/example';
import { COMPONENTS_ROUTES } from './components-routes';
import { ComponentsComponent } from './components.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    NcExampleModule,
    RouterModule.forChild([
      { path: '', component: ComponentsComponent, children: COMPONENTS_ROUTES }
    ])
  ],
  declarations: [ComponentsComponent],
})
export class ComponentsModule { }
