import { Component } from '@angular/core';

@Component({
  selector: 'example-checkbox-basic',
  template: `
    <nc-checkbox checked="checked">basic</nc-checkbox>
  `
})
export class ExampleCheckboxBasicComponent {
  checked: boolean = true;
}
