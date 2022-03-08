
import { AnimationEvent, transition, trigger } from '@angular/animations';
import {
  BasePortalOutlet,
  CdkPortalOutlet,
  ComponentPortal,
  TemplatePortal
} from '@angular/cdk/portal';
import {
  Component,
  ComponentRef,
  EmbeddedViewRef,
  EventEmitter,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { fadeInY, fadeOutY } from '@ng-clay/components/core';

import { NcModalConfig } from './modal-config';

export function throwNcModalContentAlreadyAttachedError() {
  throw Error('Attempting to attach modal content after content is already attached');
}

@Component({
  selector: 'nc-modal',
  template: `
    <ng-template cdkPortalOutlet></ng-template>
    <button *ngIf="config.closable" (click)="exit()" class="close-button" type="button">
      <span aria-hidden="true">&times;</span>
    </button>
  `,
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fade', [
      transition('void => *',  fadeInY({ a: '-10%', b: 0 }, .2)),
      transition('* => exit',  fadeOutY({ a: 0, b: '-10%' }, .2))
    ])
  ],
  host: {
    'class': 'reveal',
    '[class.reveal-transparent]': '_config.transparent',
    '[style.width]': '_config.width',
    '[style.height]': '_config.height',
    '[@fade]': 'state',
    '(@fade.start)': 'onAnimationStart($event)',
    '(@fade.done)': 'onAnimationDone($event)',
  }
})
export class NcModalComponent extends BasePortalOutlet {

  @ViewChild(CdkPortalOutlet, { static: true }) private _portalOutlet: CdkPortalOutlet;

  _config: NcModalConfig;

  set config(value: NcModalConfig) { this._config = value; }
  get config () { return this._config; }

  state: 'void' | 'enter' | 'exit' = 'enter';

  animationStateChanged = new EventEmitter<AnimationEvent>();

  constructor() { super(); }

  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
    if (this._portalOutlet.hasAttached()) {
      throwNcModalContentAlreadyAttachedError();
    }
    return this._portalOutlet.attachComponentPortal(portal);
  }

  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    if (this._portalOutlet.hasAttached()) {
      throwNcModalContentAlreadyAttachedError();
    }
    return this._portalOutlet.attachTemplatePortal(portal);
  }

  onAnimationDone(event: AnimationEvent): void {
    this.animationStateChanged.emit(event);
  }

  onAnimationStart(event: AnimationEvent): void {
    this.animationStateChanged.emit(event);
  }

  exit() {
    this.state = 'exit';
  }
}
