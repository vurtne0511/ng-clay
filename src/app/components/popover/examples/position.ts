import { Component } from '@angular/core';

@Component({
  selector: 'example-popover-position',
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

    <a class="top-left" class="button" nc-popover="{{title}}" position="topLeft"> TL
      <nc-popover-pane>{{content}}</nc-popover-pane>
    </a>

    <a class="top" class="button" nc-popover="{{title}}" position="top"> top
      <nc-popover-pane>{{content}}</nc-popover-pane>
    </a>

    <a class="top-right" class="button" nc-popover="{{title}}" position="topRight"> TR
      <nc-popover-pane>{{content}}</nc-popover-pane>
    </a>
  </div>

  <div style="width: 70px; float: left;">
    <a class="left-top" class="button" nc-popover="{{title}}" position="leftTop"> LT
      <nc-popover-pane>{{content}}</nc-popover-pane>
    </a>

    <a class="left" class="button" nc-popover="{{title}}" position="left"> left
      <nc-popover-pane>{{content}}</nc-popover-pane>
    </a>

    <a class="left-bottom" class="button" nc-popover="{{title}}" position="leftBottom"> LB
      <nc-popover-pane>{{content}}</nc-popover-pane>
    </a>
  </div>

  <div style="width: 70px; margin-left: 304px;">
    <a class="right-top" class="button" nc-popover="{{title}}" position="rightTop"> RT
      <nc-popover-pane>{{content}}</nc-popover-pane>
    </a>

    <a class="right" class="button" nc-popover="{{title}}" position="right"> right
      <nc-popover-pane>{{content}}</nc-popover-pane>
    </a>

    <a class="right-bottom" class="button" nc-popover="{{title}}" position="rightBottom"> RB
      <nc-popover-pane>{{content}}</nc-popover-pane>
    </a>
  </div>

  <div style="margin-left: 70px; clear: both; white-space: nowrap;">
    <a class="bottom-left" class="button" nc-popover="{{title}}" position="bottomLeft"> BL
      <nc-popover-pane>{{content}}</nc-popover-pane>
    </a>

    <a class="bottom" class="button" nc-popover="{{title}}" position="bottom"> bottom
      <nc-popover-pane>{{content}}</nc-popover-pane>
    </a>

    <a class="bottom-right" class="button" nc-popover="{{title}}" position="bottomRight"> BR
      <nc-popover-pane>{{content}}</nc-popover-pane>
    </a>
  </div>

  `
})
export class ExamplePopoverPositionComponent {
  content = '弹出框内容';
  title = '标题';

}



