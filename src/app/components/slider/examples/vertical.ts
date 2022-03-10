import { Component } from '@angular/core';

@Component({
  selector: 'example-slider-vertical',
  template: `
    <nc-slider vertical></nc-slider>
    <nc-slider vertical invert></nc-slider>
    <nc-slider vertical [step]="10"></nc-slider>
    <nc-slider vertical [step]="20" stepmark></nc-slider>
    <nc-slider vertical invert [step]="20" stepmark></nc-slider>
  `
})
export class ExampleSliderVerticalComponent { }
