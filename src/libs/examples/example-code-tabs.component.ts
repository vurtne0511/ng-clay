import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';

import {
  NC_EXAMPLE_CODE_PANEL_PARENT,
  NcExampleCodeTabPaneParent,
  NcExampleCodeTabsPanelComponent
} from './example-code-tabs-panel.component';

@Component({
  selector: 'nc-example-code-tabs',
  template: `
    <span class="nc-example-code-shown"
      (click)="shown=!shown">
      <fa-icon [icon]="faAngular" class="icon" [class.visible]="shown"></fa-icon>代码
    </span>
    <div class="nc-example-code-tabs">
      <span class="nc-example-tabs-title" *ngFor="let pane of panes" [class.is-active]="activeTab === pane.title">
        <a (click)="activeTab = pane.title">{{pane?.title}}</a>
      </span>
    </div>
    <div class="nc-example-code-tabs-content">
      <ng-content select="nt-example-code-tabs-panel"></ng-content>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'nc-example-code-tabs',
    '[class.shown]': 'shown'
  },
  providers: [
    { provide: NC_EXAMPLE_CODE_PANEL_PARENT, useExisting: NcExampleCodeTabsComponent }
  ]
})
export class NcExampleCodeTabsComponent implements NcExampleCodeTabPaneParent, AfterContentInit {

  shown = false;

  activeTab!: string;

  faAngular = faAngular;

  @ContentChildren(NcExampleCodeTabsPanelComponent) panes: QueryList<NcExampleCodeTabsPanelComponent> | undefined;

  ngAfterContentInit() {
    if (this.panes && this.panes.length > 0) {
      this.activeTab = this.panes.first.title;
    }
  }
}
