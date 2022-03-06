import { CommonModule, registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/zh';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
// import { NtNativeDateModule } from '@ng-tangram/components/core';
// import { NtFormsModule } from '@ng-tangram/components/forms';
// import { NtNoopUploadModule } from '@ng-tangram/components/noop-upload';
// import { NtNotifierModule } from '@ng-tangram/components/notifier';
// import { NtMarkedEngineModule } from '@ng-tangram/markdown';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HeaderModule } from './shared/header';

registerLocaleData(locale);

const ROUTES: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule) },
  // { path: 'components', loadChildren: () => import('./components/components.module').then(mod => mod.ComponentsModule) },
  { path: '**', component: PageNotFoundComponent, data: { title: '404 - 找不到此页面' } }
];

@NgModule({
  imports: [
    BrowserModule.withServerTransition({
      appId: 'ng-clay-docs'
    }),
    CommonModule,
    HeaderModule,
    // NtFormsModule.forRoot(),
    // NtNoopUploadModule,
    // NtNativeDateModule,
    // NtNotifierModule,
    // NtMarkedEngineModule,
    RouterModule.forRoot(ROUTES, {
      initialNavigation: 'enabled',
      paramsInheritanceStrategy: 'always'
    })
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'zh-CN' }
  ],
  declarations: [
    AppComponent,
    // PageNotFoundComponent
  ],
  exports: [AppComponent]
})
export class AppModule { }
