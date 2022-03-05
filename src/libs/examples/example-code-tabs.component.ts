import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';

import {
  NT_EXAMPLE_CODE_PANEL_PARENT,
  NtExampleCodeTabPaneParent,
  NtExampleCodeTabsPanelComponent
} from './example-code-tabs-panel.component';

@Component({
  selector: 'nt-example-code-tabs',
  template: `
    <span class="nt-example-code-shown"
      (click)="shown=!shown"
      [nt-tooltip]="shown ? '收起代码' : '展开代码'">
      <fa-icon [icon]="faAngular" class="icon" [class.visible]="shown"></fa-icon>代码
    </span>
    <div class="nt-example-code-tabs">
      <span class="nt-example-tabs-title" *ngFor="let pane of panes" [class.is-active]="activeTab === pane.title">
        <a (click)="activeTab = pane.title">{{pane?.title}}</a>
      </span>
    </div>
    <div class="nt-example-code-tabs-content">
      <ng-content select="nt-example-code-tabs-panel"></ng-content>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'nt-example-code-tabs',
    '[class.shown]': 'shown'
  },
  providers: [
    { provide: NT_EXAMPLE_CODE_PANEL_PARENT, useExisting: NtExampleCodeTabsComponent }
  ]
})
export class NtExampleCodeTabsComponent implements NtExampleCodeTabPaneParent, AfterContentInit {

  shown = false;

  activeTab: string;

  faAngular = faAngular;

  @ContentChildren(NtExampleCodeTabsPanelComponent) panes: QueryList<NtExampleCodeTabsPanelComponent>;

  ngAfterContentInit() {
    if (this.panes && this.panes.length > 0) {
      this.activeTab = this.panes.first.title;
    }
  }
}
