import { Component } from '@angular/core';

@Component({
  selector: 'example-tooltip-basic',
  styles: [`
    .button {
      margin-left: 8px;
      margin-bottom: 8px;
    }
  `],
  template: `
    <ng-template #title>标题</ng-template>
    <a class="button" [nc-tooltip]="title"> 提示1 </a>

    <nc-tooltip title="标题">
      <a class="button">提示2</a>
    </nc-tooltip>
  `
})
export class ExampleTooltipBasciComponent {

}
