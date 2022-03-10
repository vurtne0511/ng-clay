import { Component } from '@angular/core';

@Component({
  selector: 'example-dropdown-position',
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
    <a nc-dropdown class="button" position="topLeft"> TL
      <nc-dropdown-pane arrow autosize>弹出层</nc-dropdown-pane>
    </a>

    <a nc-dropdown class="button" position="top"> top
      <nc-dropdown-pane arrow autosize>弹出层</nc-dropdown-pane>
    </a>

    <a nc-dropdown class="button" position="topRight"> TR
      <nc-dropdown-pane arrow autosize>弹出层</nc-dropdown-pane>
    </a>
  </div>

  <div style="width: 70px; float: left;">
    <a nc-dropdown class="button" position="leftTop"> LT
      <nc-dropdown-pane arrow autosize>弹出层</nc-dropdown-pane>
    </a>

    <a nc-dropdown class="button" position="left"> left
      <nc-dropdown-pane arrow autosize>弹出层</nc-dropdown-pane>
    </a>

    <a nc-dropdown class="button" position="leftBottom"> LB
      <nc-dropdown-pane arrow autosize>弹出层</nc-dropdown-pane>
    </a>
  </div>

  <div style="width: 70px; margin-left: 304px;">
    <a nc-dropdown class="button" position="rightTop"> RT
      <nc-dropdown-pane arrow autosize>弹出层</nc-dropdown-pane>
    </a>

    <a nc-dropdown class="button" position="right"> right
      <nc-dropdown-pane arrow autosize>弹出层</nc-dropdown-pane>
    </a>

    <a nc-dropdown class="button" position="rightBottom"> RB
      <nc-dropdown-pane arrow autosize>弹出层</nc-dropdown-pane>
    </a>
  </div>

  <div style="margin-left: 70px; clear: both; white-space: nowrap;">
    <a nc-dropdown class="button" position="bottomLeft"> BL
      <nc-dropdown-pane arrow autosize>弹出层</nc-dropdown-pane>
    </a>

    <a nc-dropdown class="button" position="bottom"> bottom
      <nc-dropdown-pane arrow autosize>弹出层</nc-dropdown-pane>
    </a>

    <a nc-dropdown class="button" position="bottomRight"> BR
      <nc-dropdown-pane arrow autosize>弹出层</nc-dropdown-pane>
    </a>
  </div>

  `
})
export class ExampleDropdownPositionComponent {
  events: string[] = [];

}



