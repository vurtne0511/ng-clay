import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NcOptionModule } from '@ng-clay/components/core';

import { NcAutocompleteOriginDirective } from './autocomplete-origin.directive';
import {
  NC_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER,
  NcAutocompleteTriggerDirective
} from './autocomplete-trigger.directive';
import { NcAutocompleteComponent } from './autocomplete.component';

@NgModule({
  imports: [
    CommonModule,
    NcOptionModule
  ],
  exports: [
    NcAutocompleteComponent,
    NcAutocompleteTriggerDirective,
    NcAutocompleteOriginDirective,
    NcOptionModule
  ],
  declarations: [
    NcAutocompleteComponent,
    NcAutocompleteTriggerDirective,
    NcAutocompleteOriginDirective
  ],
  providers: [NC_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER]
})
export class NcAutocompleteModule { }
