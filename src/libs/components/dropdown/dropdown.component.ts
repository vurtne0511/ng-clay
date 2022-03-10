import { CdkOverlayOrigin, ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { NcOverlayComponent, NcOverlayPosition } from '@ng-clay/components/overlay';

import {
  NC_DROPDOWN_PARENC_COMPONENT,
  NcDropdownPaneComponent,
  NcDropdownParentComponent
} from './dropdown-pane.component';

export declare type NcDropdownTriggerType = '' | 'hover' | 'click';

@Component({
  selector: 'nc-dropdown, [nc-dropdown]',
  templateUrl: 'dropdown.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    '(click)': '_onClick($event)',
    '(mouseenter)': '_onMouseEnter($event)',
    '(mouseleave)': '_onMouseLeave($event)'
  },
  providers: [
    { provide: NC_DROPDOWN_PARENC_COMPONENT, useExisting: NcDropdownComponent }
  ]
})
export class NcDropdownComponent implements NcDropdownParentComponent {

  readonly origin: CdkOverlayOrigin;

  @Input() position: NcOverlayPosition | string = NcOverlayPosition.BottomLeft;

  @Input() trigger: NcDropdownTriggerType = 'hover';

  @Output() afterOpen = new EventEmitter<any>();
  @Output() afterClosed = new EventEmitter<any>();

  @Output() beforeOpen = new EventEmitter<any>();
  @Output() beforeClosed = new EventEmitter<any>();

  @Output() positionChange = new EventEmitter<ConnectedOverlayPositionChange>();

  @ViewChild(NcOverlayComponent, { static: true }) overlay!: NcOverlayComponent;

  @ContentChild(NcDropdownPaneComponent) pane!: NcDropdownPaneComponent;

  constructor(_elementRef: ElementRef) {
    this.origin = new CdkOverlayOrigin(_elementRef);
  }

  _onClick(_: Event) {
    if (this.trigger === 'click') {
      this.overlay.toggle();
    }
  }

  _onMouseEnter(_: Event) {
    if (this.trigger === 'hover') {
      this.overlay.markOpen();
    }
  }

  _onMouseLeave(_: Event) {
    if (this.trigger === 'hover') {
      this.overlay.markClose();
    }
  }

  _afterOpen(event: any) {
    this.afterOpen.next(event);
  }

  _afterClosed(event: any) {
    this.afterClosed.next(event);
  }

  _beforeOpen(event: any) {
    this.beforeOpen.next(event);
  }

  _beforeClosed(event: any) {
    this.beforeClosed.next(event);
  }

  _positionChange(change: ConnectedOverlayPositionChange) {
    this.positionChange.next(change);
  }
}
