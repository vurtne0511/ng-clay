
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'nc-progress',
  templateUrl: 'progress.component.html',
  host: {
    '[class]': '["progress", color, size].join(" ")'
  }
})
export class NcProgressComponent {

  private _max = 100;

  private _value = 0;

  @Input()
  set max(value: number) { this._max = coerceNumberProperty(value, 100); }
  get max() { return this._max; }

  @Input()
  set value(value: number) { this._value = coerceNumberProperty(value); }
  get value() { return this._value; }

  @Input() size: string = 'medium';

  @Input() color: string = '';

  get percent() {
    const percent = this.value / this.max * 100;
    return percent > 100 ? 100 : percent;
  }
}
