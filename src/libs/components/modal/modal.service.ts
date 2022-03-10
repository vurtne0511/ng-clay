import { Subject } from 'rxjs';

import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import {
  ComponentPortal,
  ComponentType,
  PortalInjector,
  TemplatePortal
} from '@angular/cdk/portal';
import { Location } from '@angular/common';
import {
  ComponentRef,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Optional,
  TemplateRef
} from '@angular/core';

import { NcModalConfig } from './modal-config';
import { NcModalRef } from './modal-ref';
import { NcModalComponent } from './modal.component';

export const NC_MODAL_DATA = new InjectionToken<any>('nc-modal-data');
export const NC_MODAL_DEFAULT_CONFIG = new InjectionToken<NcModalConfig>('nc-model-default-config');
export type NcModalContent<T> = TemplateRef<T> | ComponentType<T>;

@Injectable()
export class NcModal {

  private _openModalsAtThisLevel: NcModalRef<any>[] = [];
  private _afterAllClosedAtThisLevel = new Subject<void>();
  private _afterOpenAtThisLevel = new Subject<NcModalRef<any>>();

  constructor(
    @Optional() private _location: Location,
    @Optional() @Inject(NC_MODAL_DEFAULT_CONFIG) private _defaultConfig: NcModalConfig,
    private _overlay: Overlay,
    private _injector: Injector) { }

  open<T = any>(content: NcModalContent<T>, config: NcModalConfig = {}): NcModalRef<T, any> {

    config = { ...this._defaultConfig || new NcModalConfig(), ...config };

    const overlayRef = this._createOverlay(config);
    const modalContainerRef = this._attachModalContainer(overlayRef, config);
    const modalRef = this._attachModalContent(content, modalContainerRef, overlayRef, config);

    this._openModalsAtThisLevel.push(modalRef);
    modalRef.afterClosed().subscribe(() => this._removeOpenModal(modalRef));
    this._afterOpenAtThisLevel.next(modalRef);

    return modalRef;
  }

  private _createOverlay(config: NcModalConfig) {
    const overlayConfig = this._getOverlayConfig(config);
    return this._overlay.create(overlayConfig);
  }

  private _attachModalContainer(overlayRef: OverlayRef, config: NcModalConfig) {
    const containerPortal = new ComponentPortal(NcModalComponent, null);
    const containerRef: ComponentRef<NcModalComponent> = overlayRef.attach(containerPortal);
    containerRef.instance.config = config;
    return containerRef.instance;
  }

  private _attachModalContent<T>(
    content: NcModalContent<T>,
    modalContainer: NcModalComponent,
    overlayRef: OverlayRef,
    config: NcModalConfig): NcModalRef<T> {

    const modalRef = new NcModalRef<T>(overlayRef, modalContainer, this._location, config.id);

    if (config.hasBackdrop) {
      overlayRef.backdropClick().subscribe(() => {
        if (modalRef.closable) {
          modalRef.close();
        }
      });
    }

    if (content instanceof TemplateRef) {
      modalContainer.attachTemplatePortal(new TemplatePortal<T>(content, null!, <any>{ $implicit: config.data, modalRef }));
    } else {
      const injector = this._createInjector<T>(config, modalRef, modalContainer);
      const contentRef = modalContainer.attachComponentPortal<T>(new ComponentPortal(content, undefined, injector));
      modalRef.componentInstance = contentRef.instance;
    }

    return modalRef;
  }

  /**
 * Removes a modal from the array of open modals.
 * @param modalRef modal to be removed.
 */
  private _removeOpenModal(modalRef: NcModalRef<any>) {
    const index = this._openModalsAtThisLevel.indexOf(modalRef);

    if (index > -1) {
      this._openModalsAtThisLevel.splice(index, 1);

      if (!this._openModalsAtThisLevel.length) {
        this._afterAllClosedAtThisLevel.next();
      }
    }
  }

  private _createInjector<T>(config: NcModalConfig, modalRef: NcModalRef<T>, modalContainer: NcModalComponent): PortalInjector {

    const injector = config && config.viewContainerRef && config.viewContainerRef.injector;

    const injectionTokens = new WeakMap();
    injectionTokens.set(NcModalRef, modalRef);
    injectionTokens.set(NcModalComponent, modalContainer);
    injectionTokens.set(NC_MODAL_DATA, config.data);
    return new PortalInjector(injector || this._injector, injectionTokens);
  }

  private _getOverlayConfig(config: NcModalConfig): OverlayConfig {
    const positionStrategy = this._overlay.position()
      .global()
      .centerHorizontally();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this._overlay.scrollStrategies.block(),
      minWidth: config.minWidth,
      minHeight: config.minHeight,
      maxWidth: config.maxWidth,
      maxHeight: config.maxHeight,
      positionStrategy: config.centerVertically
        ? positionStrategy.centerVertically()
        : positionStrategy.top(config.top)
    });

    return overlayConfig;
  }
}
