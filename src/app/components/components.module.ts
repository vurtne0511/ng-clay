import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { NtExampleModule } from '@ng-clay/example';

import { COMPONENTS_ROUTES } from './components-routes';
import { ComponentsComponent } from './components.component';
import { HeaderModule } from '../shared/header';
import { NtExampleModule } from 'src/libs/examples';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    NtExampleModule,
    RouterModule.forChild([
      { path: '', component: ComponentsComponent, children: COMPONENTS_ROUTES }
    ])
  ],
  declarations: [ComponentsComponent],
})
export class ComponentsModule { }
