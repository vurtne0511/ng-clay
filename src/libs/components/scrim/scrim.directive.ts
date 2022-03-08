import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { isPlatformBrowser } from '@angular/common';
import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  PLATFORM_ID,
  Renderer2,
  ViewContainerRef
} from '@angular/core';

import { NcScrimComponent } from './scrim.component';

@Directive({
  selector: '[NcScrim]'
})
export class NcScrimDirective implements OnDestroy {

  private _componentRef: ComponentRef<NcScrimComponent>;

  // @ContentChild(NcScrimComponent) component: NcScrimComponent;

  @Input('scrimText')
  set text(value: string) { this._componentRef.instance.text = value; }

  @Input('ncScrim')
  set scrim(value: boolean) { this._componentRef.instance.isOpen = coerceBooleanProperty(value); }

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private _elementRef: ElementRef,
    private _renderer: Renderer2,
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _viewContainerRef: ViewContainerRef) {

    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(NcScrimComponent);
    this._componentRef = this._viewContainerRef.createComponent(componentFactory);
    if (isPlatformBrowser(this.platformId)) {
      const style = window.getComputedStyle(this._elementRef.nativeElement);
      if (style.position !== 'absolute' || style.position !== 'absolute') {
        this._renderer.setStyle(this._elementRef.nativeElement, 'position', 'relative');
      }
      this._renderer.appendChild(this._elementRef.nativeElement, this._componentRef.location.nativeElement);
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this._renderer.removeChild(this._elementRef.nativeElement, this._componentRef.location.nativeElement);
      this._componentRef.destroy();
    }
  }
}
