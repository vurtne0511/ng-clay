

import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BooleanInput, coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges
} from '@angular/core';

import { NcFileError, NcFileSizeError, NcFileTypeError } from './file-select-errors';

@Directive({
  selector: '[ncFileSelect]',
  host: {
    '(click)': 'trigger($event)'
  }
})
export class NcFileSelectDirective implements OnInit, OnChanges, OnDestroy {

  private _destroy = new Subject();

  private _accept = '*';

  @Input()
  get accept() { return this._accept; }
  set accept(value: string | Array<string>) {
    if (typeof value === 'string') {
      this._accept = value.replace(' ', '');
    } else {
      this._accept = value.join(',');
    }
  }

  private _limitSize = Number.MAX_VALUE;

  @Input()
  get limitSize() { return this._limitSize; }
  set limitSize(value: number) { this._limitSize = coerceNumberProperty(value, 5); }

  private _multiple = false;

  @Input()
  get multiple() { return this._multiple; }
  set multiple(value: BooleanInput) {
    this._multiple = coerceBooleanProperty(value);
  }

  private _disabled = false;

  @Input()
  get disabled() { return this._disabled; }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }

  @Output() select = new EventEmitter<File[]>();

  @Output() errors = new EventEmitter<NcFileError[]>();

  private _input!: HTMLInputElement;

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['accept'] || changes['maxSize'] || changes['multiple'];
    if (change && !change.firstChange) {
      this._updateProperty();
    }
  }

  ngOnInit() {
    this._input = this._renderer.createElement('input');
    this._renderer.setStyle(this._input, 'visibility', 'hidden');
    this._renderer.setStyle(this._input, 'width', 0);
    this._renderer.setStyle(this._input, 'height', 0);
    this._renderer.setStyle(this._input, 'margin', 0);
    this._renderer.setProperty(this._input, 'type', 'file');
    this._updateProperty();

    fromEvent(this._input, 'change')
      .pipe(takeUntil(this._destroy))
      .subscribe(event => this._change(event));
  }

  trigger(event: Event) {
    if (!this.disabled) {
      this._input.click();
    }
    event.preventDefault();
  }

  private _updateProperty() {
    this._renderer.setProperty(this._input, 'accept', this._accept);
    this._renderer.setProperty(this._input, 'disabled', this.disabled);
    this._renderer.setProperty(this._input, 'multiple', this.multiple ? 'multiple' : null);
  }

  private _change(_: Event) {
    const errors: NcFileError[] = [];
    const files: File[] = Array.from(this._input.files || []).filter(file => {
      let valid = true;

      if (!(valid = this._fileSizeValid(file))) {
        errors.push(new NcFileSizeError(file, this.limitSize));
      } else if (!(valid = this._fileTypeValid(file))) {
        errors.push(new NcFileTypeError(file, file.type));
      }
      return valid;
    });

    if (errors.length > 0) {
      this.errors.next(errors);
    }

    if (files.length > 0) {
      this.select.next(files);
    }

    this._input.value = '';
  }

  private _fileTypeValid(file: File) {
    return this.accept.indexOf(file.type) > -1 || this.accept.indexOf('*') > -1;
  }

  private _fileSizeValid(file: File) {
    return file.size <= this.limitSize * 1024 * 1024;
  }

  ngOnDestroy() {
    if (this._input) {
      this._destroy.next(null);
      // this._input = null;
    }
  }
}
