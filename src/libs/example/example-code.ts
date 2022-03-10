import { highlightAll } from 'prismjs';

import { isPlatformBrowser } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  PLATFORM_ID,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'nc-example-code',
  template: `
    <span class="nc-example-code-shown -top-12 right-5"
      (click)="shown=!shown">
      <fa-icon [icon]="faAngular" class="icon mr-1" [class.text-red-600]="shown"></fa-icon>代码
    </span>
    <pre class="nc-example-code-source language-{{lang}}" [class.!block]="shown"><code class="language-{{lang}}">{{code}}</code></pre>
  `,
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'nc-example-code'
  }
})
export class NcExampleCodeComponent implements AfterContentInit, OnChanges {

  @Input() code!: string;

  @Input() lang: string = 'typescript';

  shown = false;

  faAngular = faAngular;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
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
