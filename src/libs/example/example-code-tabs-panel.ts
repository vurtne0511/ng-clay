import { highlightAll } from 'prismjs';

import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  InjectionToken,
  Input,
  PLATFORM_ID,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

export interface NcExampleCodeTabPaneParent {
  activeTab: string;
}

export const NC_EXAMPLE_CODE_PANEL_PARENT = new InjectionToken<NcExampleCodeTabPaneParent>('nc-example-code-panel-parent');

@Component({
  selector: 'nc-example-code-tabs-panel',
  template: `
    <pre class="code-container language-{{lang}}"><code class="language-{{lang}}">{{code}}</code></pre>
  `,
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'nc-example-code-tabs-panel',
    '[class.block]': 'parent.activeTab === title'
  },
})
export class NcExampleCodeTabsPanelComponent {

  private _title!: string;

  @Input() code!: string;

  @Input() lang!: string;

  @Input()
  get title() { return this._title || this.lang; }
  set title(value: string) { this._title = value; }

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(NC_EXAMPLE_CODE_PANEL_PARENT) public parent: NcExampleCodeTabPaneParent,
    private elementRef: ElementRef) { }

  ngAfterContentInit() {
    isPlatformBrowser(this.platformId) && Promise
      .resolve()
      .then(() => highlightAll(this.elementRef.nativeElement));
  }

  ngOnChanges(changes: SimpleChanges) {
    const change = changes['code'] || changes['lang'];
    if (change && !change.firstChange && isPlatformBrowser(this.platformId)) {
      highlightAll(this.elementRef.nativeElement);
    }
  }
}
