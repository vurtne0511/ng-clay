import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Type } from '@angular/core';

import { NcFormAutofocusDirective } from './form-autofocus.directive';
import { NcFormErrorPipe } from './form-error.pipe';
import { NcFormFieldComponent } from './form-field.component';
import { NcFormLabelWidthDirective } from './form-label-width.directive';
import { NcFormOrientationDirective } from './form-orientation.directive';
import {
  NC_VALIDATION_TRANSFOMER,
  NcFormValidationTransformer,
  NcValidationTransformer
} from './form-validation';

@NgModule({
  imports: [CommonModule],
  exports: [
    NcFormFieldComponent,
    NcFormAutofocusDirective,
    NcFormLabelWidthDirective,
    NcFormOrientationDirective,
    NcFormErrorPipe
  ],
  declarations: [
    NcFormFieldComponent,
    NcFormAutofocusDirective,
    NcFormLabelWidthDirective,
    NcFormOrientationDirective,
    NcFormErrorPipe
  ]
})
export class NcFormsModule {
  public static forRoot(transformer?: Type<NcValidationTransformer>): ModuleWithProviders<NcFormsModule> {
    return {
      ngModule: NcFormsModule,
      providers: [
        { provide: NC_VALIDATION_TRANSFOMER, useClass: transformer || NcFormValidationTransformer }
      ]
    };
  }
}
