import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {
  AfterContentInit,
  ContentChildren,
  Directive,
  OnDestroy,
  Optional,
  QueryList
} from '@angular/core';
import { FormGroupDirective, NgForm } from '@angular/forms';

import { NcFormFieldComponent } from './form-field.component';

@Directive({
  selector: 'form[ncFormAutofocus]'
})
export class NcFormAutofocusDirective implements AfterContentInit, OnDestroy {

  private _destory = new Subject();

  formContainer: NgForm | FormGroupDirective;

  @ContentChildren(NcFormFieldComponent, { descendants: true }) fields!: QueryList<NcFormFieldComponent>;

  constructor(
    @Optional() form: NgForm,
    @Optional() formGroup: FormGroupDirective) {
    this.formContainer = form || formGroup;
  }

  ngAfterContentInit() {
    if (this.formContainer) {
      this.formContainer.ngSubmit
        .pipe(takeUntil(this._destory))
        .subscribe(() => {
          const field = this.fields.find(field => !!field.ngControl && !!field.ngControl.invalid);
          if (typeof field?.control?.focus === 'function') {
            field.control.focus();
          }
        });
    }
  }

  ngOnDestroy() {
    this._destory.next(null);
    this._destory.complete();
  }
}
