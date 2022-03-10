import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'example-slider-forms',
  template: `
    <nc-slider [formControl]="control"></nc-slider>
  `
})
export class ExampleSliderFormsComponent {
  control = new FormControl(5);
}
