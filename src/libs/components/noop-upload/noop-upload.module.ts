import { NgModule } from '@angular/core';
import { NcUploadHandler } from '@ng-clay/components/core';

import { NcNoopUploadHandler } from './noop-upload-handler';

@NgModule({
  providers: [
    { provide: NcUploadHandler, useClass: NcNoopUploadHandler }
  ]
})
export class NcNoopUploadModule { }
