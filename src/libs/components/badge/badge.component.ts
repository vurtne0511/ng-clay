import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  PLATFORM_ID,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';

export declare type NtBadgeType = '' | 'static' | 'float' | 'notify';

@Component({
  selector: 'nc-badge, [nc-badge]',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class]': '["badge", color].join(" ")',
    '[class.badge-float]': 'type === "float"',
    '[class.badge-notify]': 'type === "notify"'
  }
})
export class NcBadgeComponent implements AfterViewInit, OnDestroy {

  private _type: NtBadgeType = 'static';

  @Input() color: string = '';

  @Input()
  set type(value: NtBadgeType) {
    if (value === 'float' || value === 'notify') {
      this._resetPosition();
    } else {
      this._clearPosition();
    }
    this._type = value;
  }
  get type() { return this._type; }

  private _originalPosition!: string;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private _elementRef: ElementRef,
    private _renderer: Renderer2) { }

  ngAfterViewInit() {
    this._resetPosition();
  }

  ngOnDestroy() {
    this._clearPosition();
  }

  // 重置容器的 position 属性
  private _resetPosition() {
    if (isPlatformBrowser(this.platformId)) {
      const style = window.getComputedStyle(this._elementRef.nativeElement.parentElement);
      if (style.position !== 'absolute' || style.position !== 'absolute') {
        this._originalPosition = style.position;
        this._renderer.setStyle(this._elementRef.nativeElement.parentElement, 'position', 'relative');
      }
    }
  }

  // 清理 position 属性
  private _clearPosition() {
    if (isPlatformBrowser(this.platformId)) {
      if (this._originalPosition) {
        this._renderer.removeStyle(this._elementRef.nativeElement.parentElement, 'position');
      }
    }
  }
}
