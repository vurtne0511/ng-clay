import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'example-progress-basic',
  template: `
    <nc-progress [value]="value" color="primary"></nc-progress>
    <nc-progress [value]="value" color="secondary" size="tiny"></nc-progress>
    <nc-progress [value]="value" color="success" size="small"></nc-progress>
    <nc-progress [value]="value" color="alert" size="medium"></nc-progress>
    <nc-progress [value]="value" color="warning" size="large">80%</nc-progress>
  `
})
export class ExampleProgressBasciComponent implements AfterContentInit {
  value = 0;
  constructor() { }

  ngAfterContentInit() {
    setTimeout(() => this.value = 80);
  }
}
