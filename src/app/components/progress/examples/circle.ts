import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'example-progress-circle',
  styles: [`
      i {
        color: #53c41a;
        font-size: 30px;
      }
    `
  ],
  template: `
    <nc-progress-circle [value]="value"></nc-progress-circle>
    <nc-progress-circle [value]="value" color="secondary"></nc-progress-circle>
    <nc-progress-circle [value]="100" color="success"><i class="fas fa-check"></i></nc-progress-circle>
    <nc-progress-circle [value]="value" color="alert">80%</nc-progress-circle>
    <nc-progress-circle [value]="value" color="warning" [radius]="50"></nc-progress-circle>
  `
})
export class ExampleProgressCircleComponent implements AfterContentInit {
  value = 0;
  constructor() { }

  ngAfterContentInit() {
    setTimeout(() => this.value = 80);
  }
}
