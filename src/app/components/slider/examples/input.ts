import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NcSliderChange } from '@ng-clay/components/slider';

@Component({
  selector: 'example-slider-input',
  template: `
    <nc-slider [(ngModel)]="model" (change)="onChange('mode 1', $event)"></nc-slider>
    <input type="number" [(ngModel)]="model">

    <nc-slider #slider1 [value]="value" (change)="onChange('mode 2', $event)"></nc-slider>
    <input type="number" [ncSliderInput]="slider1">

    <nc-slider #slider2 [formControl]="control" (change)="onChange('mode 3', $event)"></nc-slider>
    <input type="number" [ncSliderInput]="slider2">
  `
})
export class ExampleSliderInputComponent {

  model = 15;

  value = 15;

  control = new FormControl(15);

  onChange(mode: string, event: NcSliderChange) {
    console.log(`${mode}:`, event);
  }
}
