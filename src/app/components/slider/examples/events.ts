import { Component } from '@angular/core';

@Component({
  selector: 'example-slider-events',
  template: `
    <nc-slider (input)="inputValue = $event.value"></nc-slider>
  `
})
export class ExampleSliderEventsComponent {
  inputValue: number = 5;
 }
