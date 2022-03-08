import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { NcTooltipModule } from '@ng-clay/components/tooltip';
import { NcMarkedEngineModule } from '@ng-clay/markdown';

import { NcExampleCodeTabsPanelComponent } from './example-code-tabs-panel.component';
import { NcExampleCodeTabsComponent } from './example-code-tabs.component';
import { NcExampleCodeComponent } from './example-code.component';
import { NcExampleLegendComponent } from './example-legend.component';
import { NcExampleShowcaseComponent } from './example-showcase.component';
import { NcExampleComponent } from './example.component';

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
    // NcTooltipModule,
    NcMarkedEngineModule
  ],
  exports: NC_EXAMPLE_COMPONENTS,
  declarations: NC_EXAMPLE_COMPONENTS
})
export class NcExampleModule { }
