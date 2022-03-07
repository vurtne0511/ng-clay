
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NcButtonModule } from '@ng-clay/components/button';

import { HeaderModule } from '../shared/header';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    HeaderModule,
    NcButtonModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent, data: { title: '基于 Angular 的桌面端组件库' } }
    ])
  ],
  declarations: [HomeComponent],
})
export class HomeModule { }
