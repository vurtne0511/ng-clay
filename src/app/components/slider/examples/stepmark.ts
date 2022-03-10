import { Component } from '@angular/core';

@Component({
  selector: 'example-slider-stepmark',
  template: `
    <nc-slider [min]="35" [max]="45" stepmark></nc-slider>
    <nc-slider [step]="20" stepmark></nc-slider>
  `
})
export class ExampleSliderStepmarkComponent { }
