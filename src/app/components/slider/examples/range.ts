import { Component } from '@angular/core';

@Component({
  selector: 'example-slider-range',
  template: `
    <nc-slider (input)="inputValue = $event.value"></nc-slider>
  `
})
export class ExampleSliderRangeComponent {
  inputValue: number = 5;
 }
