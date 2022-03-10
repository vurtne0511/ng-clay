import { Component } from '@angular/core';

@Component({
  selector: 'example-slider-step',
  template: `
    <nc-slider [step]="5"></nc-slider>
    <nc-slider [value]="20" [step]="20"></nc-slider>
  `
})
export class ExampleSliderStepComponent { }
