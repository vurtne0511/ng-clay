import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NcTooltipModule } from '@ng-clay/components/tooltip';
import { NcMarkedEngineModule } from '@ng-clay/markdown';

import { NcExampleComponent } from './example';
import { NcExampleCodeComponent } from './example-code';
import { NcExampleCodeTabsComponent } from './example-code-tabs';
import { NcExampleCodeTabsPanelComponent } from './example-code-tabs-panel';
import { NcExampleLegendComponent } from './example-legend';
import { NcExampleShowcaseComponent } from './example-showcase';

export const NC_EXAMPLE_COMPONENTS = [
  NcExampleComponent,
  NcExampleShowcaseComponent,
  NcExampleLegendComponent,
  NcExampleCodeComponent,
  NcExampleCodeTabsComponent,
  NcExampleCodeTabsPanelComponent
];

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    NcTooltipModule,
    NcMarkedEngineModule
  ],
  exports: NC_EXAMPLE_COMPONENTS,
  declarations: NC_EXAMPLE_COMPONENTS
})
export class NcExampleModule { }
