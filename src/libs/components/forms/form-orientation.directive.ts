import { Subject } from 'rxjs';

import { Directive, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

export declare type NcFormOrientation = 'vertical' | 'horizontal';

@Directive({
  selector: 'form[ncFormOrientation]',
})
export class NcFormOrientationDirective implements OnChanges, OnDestroy {

  private readonly _orientationChange = new Subject<NcFormOrientation>();

  private _orientation!: NcFormOrientation;

  @Input('ncFormOrientation')
  get orientation() { return this._orientation; }
  set orientation(value: NcFormOrientation) {
    this._orientation = value;
  }

  get orientationChange() {
    return this._orientationChange.asObservable();
  }

  ngOnChanges(changes: SimpleChanges) {
    const change = changes['orientation'];
    if (change.currentValue !== change.previousValue) {
      this._orientationChange.next(change.currentValue);
    }
  }

  ngOnDestroy() {
    this._orientationChange.complete();
  }
}
