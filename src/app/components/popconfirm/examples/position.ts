import { Component } from '@angular/core';

@Component({
  selector: 'example-popconfirm-position',
  styles: [
    `
    .text-orange { color: orange; }
    .demo { overflow: auto; }

    .button {
      margin-right: 8px;
      margin-bottom: 8px;
      width: 70px;
      text-align: center;
    }

    div {
      display: block;
    }
    `
  ],
  template: `

  <div style="margin-left: 70px; white-space: nowrap;">
    <ng-template #topLeft><i class="text-orange fa fa-exclamation-triangle"></i> {{text}} </ng-template>
    <a class="top-left" class="button" [nc-popconfirm]="topLeft" position="topLeft"> TL </a>

    <ng-template #top><i class="text-orange fa fa-exclamation-triangle"></i> {{text}} </ng-template>
    <a class="top" class="button" [nc-popconfirm]="top" position="top"> top </a>

    <ng-template #topRight><i class="text-orange fa fa-exclamation-triangle"></i> {{text}} </ng-template>
    <a class="top-right" class="button" [nc-popconfirm]="topRight" position="topRight"> TR </a>
  </div>

  <div style="width: 70px; float: left;">
    <ng-template #leftTop><i class="text-orange fa fa-exclamation-triangle"></i> {{text}} </ng-template>
    <a class="left-top" class="button" [nc-popconfirm]="leftTop" position="leftTop"> LT </a>

    <ng-template #left><i class="text-orange fa fa-exclamation-triangle"></i> {{text}} </ng-template>
    <a class="left" class="button" [nc-popconfirm]="left" position="left"> left </a>

    <ng-template #leftBottom><i class="text-orange fa fa-exclamation-triangle"></i> {{text}} </ng-template>
    <a class="left-bottom" class="button" [nc-popconfirm]="leftBottom" position="leftBottom"> LB </a>
  </div>

  <div style="width: 70px; margin-left: 304px;">
    <ng-template #rightTop><i class="text-orange fa fa-exclamation-triangle"></i> {{text}} </ng-template>
    <a class="right-top" class="button" [nc-popconfirm]="rightTop" position="rightTop"> RT </a>

    <ng-template #right><i class="text-orange fa fa-exclamation-triangle"></i> {{text}} </ng-template>
    <a class="right" class="button" [nc-popconfirm]="right" position="right"> right </a>

    <ng-template #rightBottom><i class="text-orange fa fa-exclamation-triangle"></i> {{text}} </ng-template>
    <a class="right-bottom" class="button" [nc-popconfirm]="rightBottom" position="rightBottom"> RB </a>
  </div>

  <div style="margin-left: 70px; clear: both; white-space: nowrap;">
    <ng-template #bottomLeft><i class="text-orange fa fa-exclamation-triangle"></i> {{text}} </ng-template>
    <a class="bottom-left" class="button" [nc-popconfirm]="bottomLeft" position="bottomLeft"> BL </a>

    <ng-template #bottom><i class="text-orange fa fa-exclamation-triangle"></i> {{text}} </ng-template>
    <a class="bottom" class="button" [nc-popconfirm]="bottom" position="bottom"> bottom </a>

    <ng-template #bottomRight><i class="text-orange fa fa-exclamation-triangle"></i> {{text}} </ng-template>
    <a class="bottom-right" class="button" [nc-popconfirm]="bottomRight" position="bottomRight"> BR </a>
  </div>

  `
})
export class ExamplePopConfirmPositionComponent {
  text = '确认删除吗？'

}



