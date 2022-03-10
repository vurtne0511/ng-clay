import { Directive } from '@angular/core';

@Directive({
  selector: 'table[ncTableResizable], nc-table[ncTableResizable]'
})
export class NcTableResizable {

  private _isNativeTable!: boolean;

  constructor() { }
}
