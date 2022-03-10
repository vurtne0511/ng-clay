import {
  AfterContentInit,
  Component,
  ElementRef,
  Inject,
  Input,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { NC_MARKDOWN_ENGINE, NcMarkdownEngine } from '@ng-clay/markdown';

@Component({
  selector: 'nc-example-legend',
  template: `
    <div class="nc-example-legend-title -top-6 p-1" *ngIf="title">{{title}}</div>
    <div class="nc-example-legend-content" #content>
      <ng-content></ng-content>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'nc-example-legend'
  }
})
export class NcExampleLegendComponent implements AfterContentInit {

  @Input() title!: string;

  @ViewChild('content', { static: true, read: ElementRef }) content!: ElementRef;

  constructor(
    @Inject(NC_MARKDOWN_ENGINE) private _markdownEngine: NcMarkdownEngine) {

  }

  ngAfterContentInit() {
    this._compileContent();
  }

  private _compileContent() {
    const contentElement = this.content.nativeElement;
    this._markdownEngine
      .compile(contentElement.innerHTML)
      .subscribe(result => contentElement.innerHTML = result);
  }
}
