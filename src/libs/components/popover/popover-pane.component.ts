import { Observable, Subject, Subscription } from 'rxjs';

import { ContentObserver } from '@angular/cdk/observers';
import {
  AfterContentInit,
  Component,
  ElementRef,
  Inject,
  InjectionToken,
  ViewEncapsulation
} from '@angular/core';
import { NcOverlayComponent } from '@ng-clay/components/overlay';

export interface NcPopoverParentComponent {
  overlay: NcOverlayComponent;
}

export const NC_POPOVER_PARENC_COMPONENT = new InjectionToken<NcPopoverParentComponent>('nc-popover-parent-component');

@Component({
  selector: 'nc-popover-pane, [nc-popover-pane]',
  template: `
    <ng-content></ng-content>
  `,
  encapsulation: ViewEncapsulation.None
})
export class NcPopoverPaneComponent implements AfterContentInit {

  private _contentSubscription: Subscription;

  private _contentChange = new Subject();

  get contentChanged(): Observable<any> {
    return this._contentChange.asObservable();
  }

  get textContent(): string {
    return (this._elementRef.nativeElement.textContent || '').trim();
  }

  constructor(
    private _contentObserver: ContentObserver,
    private _elementRef: ElementRef,
    @Inject(NC_POPOVER_PARENC_COMPONENT) private _parent: NcPopoverParentComponent) {
  }

  ngAfterContentInit() {
    this._contentSubscription = this._contentObserver
      .observe(this._elementRef)
      .subscribe(() => this._checkContentChange());
  }

  ngOnDestroy() {
    if (this._contentSubscription) {
      this._contentSubscription.unsubscribe();
    }
  }

  private _checkContentChange() {
    if (this._parent.overlay.opened) {
      this._parent.overlay.forceUpdatePosition();
    }
  }
}
