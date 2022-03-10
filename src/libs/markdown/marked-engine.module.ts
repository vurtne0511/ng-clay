import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { NC_MARKDOWN_ENGINE } from './markdown-engine';
import { NcMarkedEngine } from './marked-engine';
import { NC_MARKED_DEFAULT_OPTIONS, NC_MARKED_OPTIONS } from './marked-engine-options';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    { provide: NC_MARKDOWN_ENGINE, useClass: NcMarkedEngine },
    { provide: NC_MARKED_OPTIONS, useValue: NC_MARKED_DEFAULT_OPTIONS },
  ],
})
export class NcMarkedEngineModule { }
