import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NcInputModule } from '@ng-clay/components/input';
import { NcSliderModule } from '@ng-clay/components/slider';
import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { ExampleSliderBasicComponent } from './examples/basic';
import { ExampleSliderEventsComponent } from './examples/events';
import { ExampleSliderFormsComponent } from './examples/forms';
import { ExampleSliderInputComponent } from './examples/input';
import { ExampleSliderMinMaxComponent } from './examples/min-and-max';
import { ExampleSliderRangeComponent } from './examples/range';
import { ExampleSliderStepComponent } from './examples/step';
import { ExampleSliderStepmarkComponent } from './examples/stepmark';
import { ExampleSliderVerticalComponent } from './examples/vertical';
import { SliderDocumentComponent } from './slider.component';

@NgModule({
  imports: [
    CommonModule,
    NcSliderModule,
    NcExampleModule,
    NcMarkdownModule,
    NcInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: SliderDocumentComponent }
    ])
  ],
  declarations: [
    SliderDocumentComponent,
    ExampleSliderBasicComponent,
    ExampleSliderStepComponent,
    ExampleSliderStepmarkComponent,
    ExampleSliderMinMaxComponent,
    ExampleSliderRangeComponent,
    ExampleSliderEventsComponent,
    ExampleSliderFormsComponent,
    ExampleSliderVerticalComponent,
    ExampleSliderInputComponent
  ]
})
export class SliderDocumentModule { }
