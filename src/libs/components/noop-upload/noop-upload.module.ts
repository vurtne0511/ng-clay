import { NgModule } from '@angular/core';
import { NcUploadHandler } from '@ng-clay/components/core';

import { NtNoopUploadHandler } from './noop-upload-handler';

@NgModule({
  providers: [
    { provide: NcUploadHandler, useClass: NtNoopUploadHandler }
  ]
})
export class NcNoopUploadModule { }
