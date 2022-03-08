import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { NC_PAGINATION_CONFIG, NcPaginationConfig } from './pagination-config';
import { NcPaginationComponent } from './pagination.component';

@NgModule({
  imports: [CommonModule],
  exports: [NcPaginationComponent],
  declarations: [NcPaginationComponent]
})
export class NcPaginationModule {

  public static withConfig(config?: NcPaginationConfig): ModuleWithProviders<NcPaginationModule> {
    return {
      ngModule: NcPaginationModule,
      providers: [
        { provide: NC_PAGINATION_CONFIG, useValue: config || new NcPaginationConfig() }
      ]
    };
  }
}
