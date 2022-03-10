import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NcAvatarModule } from '@ng-clay/components/avatar';
import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { AvatarDocumentComponent } from './avatar.component';
import { DemoAvatarBasicComponent } from './examples/basic';
import { DemoAvatarShapeComponent } from './examples/shape';
import { DemoAvatarSizeComponent } from './examples/size';

@NgModule({
  imports: [
    CommonModule,
    NcMarkdownModule,
    NcExampleModule,
    NcAvatarModule,
    RouterModule.forChild([
      { path: '', component: AvatarDocumentComponent }
    ])],
  declarations: [
    AvatarDocumentComponent,
    DemoAvatarBasicComponent,
    DemoAvatarSizeComponent,
    DemoAvatarShapeComponent
  ],
})
export class AvatarDocumentModule { }
